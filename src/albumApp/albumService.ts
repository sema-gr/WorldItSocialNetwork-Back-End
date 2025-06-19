import { Prisma } from "@prisma/client";
import { IError, IOkWithData } from "../types/types";
import { Album, CreateAlbum, UpdateAlbum, CreateAlbumData, CreateAlbumBody, AlbumCorrect, AlbumUpdateBody } from "./types";
import fs from "fs/promises";
import path from "path";
import prisma from "../client/prismaClient";
import { albumRepository } from "./albumRepository";
import { Image } from "../postApp/types";

async function getAlbums(): Promise<IOkWithData<Album[]> | IError> {
	const albums = await albumRepository.getAlbums();

	if (!albums) {
		return { status: "error", message: "No albums found" };
	}

	return { status: "success", data: albums };
}

async function createAlbum(data: CreateAlbum): Promise<IOkWithData<AlbumCorrect> | IError> {

	let topicInput: { create: { tag: { connect: { id: number, name: string } } }[] } | undefined;
	if (Array.isArray(data.topic)) {
		if (data.topic.length > 10) {
			return { status: "error", message: "Максимум 10 тегів дозволено" };
		}
		for (const tag of data.topic) {
			if (typeof tag !== "string" || tag.length > 50) {
				return { status: "error", message: "Кожен тег має бути рядком не довшим за 50 символів" };
			}
		}

		const tagConnections = await Promise.all(
			data.topic.map(async (topicName: string) => {
				let tag = await prisma.tags.findFirst({ where: { name: topicName } });
				if (!tag) {
					tag = await prisma.tags.create({ data: { name: topicName } });
				}
				return { tag: { connect: { id: tag.id, name: tag.name } } };
			})
		);

		topicInput = {
			create: tagConnections,
		};
	}

	const albumData: CreateAlbum = {
		name: data.name,
		topic: topicInput,
		author_id: data.author_id,
	};

	const result = await albumRepository.createAlbum(albumData)

	console.log(result)
	if (!result) {
		return { status: "error", message: "album not created" }
	}
	return { status: "success", data: result };
}

export async function editAlbum(
	data: AlbumUpdateBody,
	id: number
): Promise<IOkWithData<Album> | IError> {
	const createdImageUrls: string[] = [];
	const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");
	const API_BASE_URL = "http://192.168.1.104:3000";

	try {
		console.log("========================")
		console.log(data.images)
		await fs.mkdir(uploadDir, { recursive: true });
		console.log(`  Директорія ${uploadDir} створена/існує`);

		const currentAlbum = await prisma.album.findUnique({
			where: { id },
			include: {
				images: {
					select: {
						image: true
					}
				},
				topic: {
					select: {
						tag: true
					}
				}
			}
		});

		if (!currentAlbum) {
			return { status: "error", message: "Альбом не знайдено" };
		}

		const updateData: UpdateAlbum = {
			name:
				typeof data.name === "string"
					? data.name.trim()
					: data.name ?? currentAlbum.name,
			created_at:
				typeof data.created_at === "string"
					? data.created_at
					: data.created_at ?? currentAlbum.created_at,
		};

		// Обробка зображень
		if (data.images) {
			console.log("Обробка зображень:", JSON.stringify(data.images, null, 2));
			const allowedFormats = ["jpeg", "png", "gif"];
			const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ
			const maxImages = 10;

			const currentImageIds = currentAlbum.images.map((img) => img.image.id);

			// Обробка видалення зображень
			data.images.forEach(async (image) => {
				const foundImage = await prisma.image.findUnique({
					where: { id: image.id }
				});
				if (foundImage) {
					await prisma.image.delete({
						where: { id: image.id }
					});
				}
			});

			const createImages = await Promise.all(
				data.images.map(async (image, index) => {
					if (image.filename.startsWith("data:image")) {
						const matches = image.filename.match(/^data:image\/(\w+);base64,(.+)$/);
						if (!matches) {
							console.error("Невірний формат base64 на позиції", index);
							throw new Error(`Невірний формат base64 зображення на позиції ${index}`);
						}

						const [, ext, base64Data] = matches;
						if (!allowedFormats.includes(ext.toLowerCase())) {
							console.error(" Непідтримуваний формат зображення:", ext);
							throw new Error(`Непідтримуваний формат: ${ext}. Дозволено: JPEG, PNG, GIF`);
						}

						const buffer = Buffer.from(base64Data, "base64");
						if (buffer.length > maxSizeInBytes) {
							console.error(" Зображення занадто велике:", buffer.length);
							throw new Error(
								`Зображення на позиції ${index} занадто велике: ${Math.round(
									buffer.length / 1024 / 1024
								)} MB. Максимум 5 MB`
							);
						}

						const filename = `${Date.now()}-${Math.round(Math.random() * 1000000)}.${ext}`;
						const filePath = path.join(uploadDir, filename);

						await fs.writeFile(filePath, buffer);
						console.log("Зображення збережено:", filePath);

						try {
							await fs.access(filePath);
							createdImageUrls.push(filename);
							return { url: `uploads/${filename}` };
						} catch {
							console.error("Файл не знайдено після збереження:", filePath);
							throw new Error(`Не вдалося зберегти зображення на позиції ${index}`);
						}
					}
					return { url: image.filename };
				})
			);

			let imageInput: { create: { image: { connect: { id: number, filename: string, file: string } } }[] } | undefined;
			if (Array.isArray(createImages)) {
				if (data.images.length > 10) {
					return { status: "error", message: "Максимум 10 зображень дозволено" };
				}

				const imageConnections = await Promise.all(
					createImages.map(async (mapImage) => {
						let image = await prisma.image.findFirst({ where: { file: mapImage.url } });
						if (!image) {
							image = await prisma.image.create({ data: { file: mapImage.url, filename: mapImage.url } });
						}
						return { image: { connect: { id: image.id, filename: image.filename, file: image.file } } };
					})
				);

				imageInput = {
					create: imageConnections,
				};
			}

			updateData.images = imageInput
		}

		const updatedAlbum = await prisma.album.update({
			where: { id },
			data: updateData,
			include: {
				images: { include: { image: true } },
				topic: { include: { tag: true } },
			},
		});

		// Нормалізація
		const normalizedAlbum = {
			...updatedAlbum,
			images: updatedAlbum.images.map((img) => {
				const relativeUrl = img.image.filename.replace(/^uploads\/+/, "");
				const fullUrl = img.image.filename.startsWith("http")
					? img.image.filename
					: `${API_BASE_URL}/uploads/${relativeUrl}`;
				console.log(`Нормалізований URL зображення: ${fullUrl}`);
				return { ...img, url: fullUrl };
			}),
		};

		for (const img of normalizedAlbum.images) {
			if (!img.image.filename.startsWith("http")) {
				const filePath = path.join(uploadDir, img.image.filename.replace(/^uploads\//, ""));
				try {
					await fs.access(filePath);
					console.log(`Файл зображення доступний: ${filePath}`);
				} catch {
					console.error(`Файл зображення не знайдено: ${filePath}`);
					throw new Error(`Зображення не знайдено: ${img.image.filename}`);
				}
			}
		}

		console.log("Альбом оновлено, зображення:", normalizedAlbum.images);
		return { status: "success", data: normalizedAlbum };
	} catch (err) {
		console.error("Помилка:", err);
		for (const filename of createdImageUrls) {
			const filePath = path.join(uploadDir, filename);
			console.log(`Видаляємо файл: ${filePath}`);
			await fs.unlink(filePath).catch((e) =>
				console.error("Помилка видалення файлу:", e)
			);
		}
		return {
			status: "error",
			message: "Не вдалося оновити альбом",
		};
	}
}

async function deleteAlbum(id: number): Promise<IOkWithData<Album> | IError> {
	try {
		const deleteAlbum = await albumRepository.deleteAlbum(id);

		return { status: "success", data: deleteAlbum };
	} catch (error) {
		console.error("Error in deleteAlbum service:", error);
		return {
			status: "error",
			message:
				error instanceof Error
					? error.message
					: "Failed to delete album",
		};
	}
}

const albumService = {
	createAlbum,
	deleteAlbum,
	editAlbum,
	getAlbums,
};

export default albumService;
