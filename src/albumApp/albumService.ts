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
		images: data.images
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

	try {
		console.log(data.images)
		const API_BASE_URL = "http://192.168.1.104:3000";
		const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");

		await fs.mkdir(uploadDir, { recursive: true });

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
				},
			}
		});

		const updateData: UpdateAlbum = {
			name: typeof data.name === "string" ? data.name?.trim() : data.name ?? currentAlbum?.name,
		};

		// Обробка тегів
		if (data.tags && Array.isArray(data.tags)) {

			const validTags = data.tags
				.filter((tag): tag is string => typeof tag === "string" && tag.trim().length > 0)
				.filter((tag) => tag.length <= 50);

			if (validTags.length !== data.tags.length) {
				console.error("[EditAlbum] Некоректні теги:", data.tags);
				return { status: "error", message: "Некоректний тег або занадто довгий (макс. 50 символів)" };
			}

			const currentTags = await prisma.post_app_album_tags.findMany({
				where: { album_id: id },
				include: { tag: true }
			});

			if (validTags.length > 0) {
				await prisma.post_app_album_tags.deleteMany({
					where: { album_id: id }
				});

				const lastTag = validTags[validTags.length - 1];
				let tag = await prisma.tags.findFirst({ where: { name: lastTag } });
				if (!tag) {
					tag = await prisma.tags.create({ data: { name: lastTag } });
				}

				updateData.topic = {
					create: {
						tag: { connect: { id: tag.id } }
					}
				};
			}
		}

		// Обробка зображень
		if (data.images) {
			const allowedFormats = ["jpeg", "png", "gif"];
			const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ

			const currentImages = currentAlbum?.images;

			console.log(currentImages)

			const imagesToDelete = currentImages?.filter(currentImg => {
				if (data.images)
					return data.images.some(newImg => newImg.image.id === currentImg.image.id);
			});

			if (imagesToDelete) {
				if (imagesToDelete.length > 0) {
					await prisma.post_app_album_images.deleteMany({
						where: {
							album_id: id,
							image_id: { in: imagesToDelete.map(img => img.image.id) }
						}
					});

					await prisma.image.deleteMany({
						where: {
							id: { in: imagesToDelete.map(img => img.image.id) }
						}
					});
				}
			}

			const createImages: { url: string }[] = [];


			for (const image of data.images) {
				try {
					if (!image.image.filename) {
						continue
					}
					if (image.image.filename.startsWith("data:image")) {
						const matches = image.image.filename.match(/^data:image\/(\w+);base64,(.+)$/);
						if (!matches) {
							console.error("[EditPost] Невірний формат base64");
							continue;
						}

						const [, ext, base64Data] = matches;
						if (!allowedFormats.includes(ext.toLowerCase())) {
							console.error("[EditPost] Непідтримуваний формат зображення:", ext);
							continue;
						}

						const buffer = Buffer.from(base64Data, "base64");
						if (buffer.length > maxSizeInBytes) {
							console.error("[EditPost] Зображення занадто велике:", buffer.length);
							continue;
						}

						const filename = `${Date.now()}-${Math.round(Math.random() * 1000000)}.${ext}`;
						const filePath = path.join(uploadDir, filename);

						await fs.writeFile(filePath, buffer);
						console.log("[EditPost] Зображення збережено:", filePath);

						await fs.access(filePath);
						createdImageUrls.push(filename);

						createImages.push({ url: `uploads/${filename}` });
					} else {
						console.log(222)
						createImages.push({ url: image.image.filename });
					}

				} catch (error) {
					console.error("[EditPost] Помилка обробки зображення:", error);
					continue;
				}
			}
			updateData.images = {
				create: createImages.map(img => ({
					image: {
						create: {
							filename: img.url,
							file: img.url
						}
					}
				}))
			};
		}

		// Оновлення поста
		console.log("[EditPost] Дані для оновлення:", JSON.stringify(updateData, null, 2));
		const updatedAlbum = await prisma.album.update({
			where: { id },
			data: updateData,
			include: {
				images: { include: { image: true } },
				topic: { include: { tag: true } },
			},
		});

		// Нормалізація URL зображень
		const normalizedAlbum = {
			...updatedAlbum,
			images: updatedAlbum.images.map((img) => {
				const relativeUrl = img.image.filename.replace(/\\/g, "/").replace(/^uploads\/+/, "");
				const fullUrl = img.image.filename.startsWith("http") ? img.image.filename : `${API_BASE_URL}/uploads/${relativeUrl}`;
				console.log(`[EditPost] Нормалізований URL зображення: ${fullUrl}`);
				return { ...img, url: fullUrl };
			}),
		};

		// Перевірка доступності файлів
		for (const img of normalizedAlbum.images) {
			if (!img.url.startsWith("http")) {
				const filePath = path.join(uploadDir, img.url.replace(/^uploads\//, ""));
				try {
					await fs.access(filePath);
					console.log(`[EditPost] Файл зображення доступний: ${filePath}`);
				} catch {
					console.error(`[EditPost] Файл зображення не знайдено: ${filePath}`);
					throw new Error(`Зображення не знайдено: ${img.url}`);
				}
			}
		}

		console.log("Пост оновлено, зображення:", normalizedAlbum.images);
		return { status: "success", data: normalizedAlbum as Album };
	} catch (err) {
		console.error("Помилка:", err);

		// Очищення створених файлів
		for (const filename of createdImageUrls) {
			const filePath = path.join(__dirname, "..", "..", "public", "uploads", filename);
			console.log(`[EditPost] Видаляємо файл: ${filePath}`);
			await fs.unlink(filePath).catch((e) => console.error("[EditPost] Помилка видалення файлу:", e));
		}
		return {
			status: "error",
			message: err instanceof Error ? err.message : "Не вдалося оновити пост",
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
