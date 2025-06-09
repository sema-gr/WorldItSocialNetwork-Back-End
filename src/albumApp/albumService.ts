import { Prisma } from "@prisma/client";
import { IError, IOkWithData } from "../types/types";
import { Album, CreateAlbum, UpdateAlbum, CreateAlbumData } from "./types";
import fs from "fs/promises";
import path from "path";
import prisma from "../client/prismaClient";
import { albumRepository } from "./albumRepository";
import { url } from "inspector";

async function getAlbums(): Promise<IOkWithData<Album[]> | IError> {
	const albums = await albumRepository.getAlbums();

	if (!albums) {
		return { status: "error", message: "No albums found" };
	}

	return { status: "success", data: albums };
}

async function createAlbum(data: CreateAlbum): Promise<IOkWithData<CreateAlbum> | IError> {
	const result = await albumRepository.createAlbum(data)
	console.log(result)
	if (!result){
		return {status: "error", message: "album not created"}
	}
	return { status: "success", data: result };
}

async function editAlbum(
	data: UpdateAlbum,
	id: number
): Promise<IOkWithData<Album> | IError> {
	const createdImageUrls: string[] = [];

	try {
		const API_BASE_URL = "http://192.168.1.104:3000";
		const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");

		// Логування вхідних даних
		console.log("[EditAlbum] Вхідні дані:", JSON.stringify(data, null, 2));

		// Створюємо директорію для зображень
		await fs.mkdir(uploadDir, { recursive: true });
		console.log(`[EditAlbum] Директорія ${uploadDir} створена/існує`);

		// Отримуємо поточний альбом
		const currentAlbum = await prisma.album.findUnique({
			where: { id },
			include: {
				images: true,
			},
		});

		if (!currentAlbum) {
			console.error("[EditAlbum] альбом із ID", id, "не знайдено");
			return { status: "error", message: "альбом не знайдено" };
		}

		// Підготовка даних для оновлення
		const updateData: UpdateAlbum = {
			name:
				typeof data.name === "string"
					? data.name.trim()
					: data.name ?? currentAlbum.name,
			theme:
				typeof data.theme === "string"
					? data.theme.trim()
					: data.theme ?? currentAlbum.theme,
			year:
				typeof data.year === "string"
					? data.year.trim()
					: data.year ?? currentAlbum.year,
		};

		// Обробка зображень
		if (data.images) {
			console.log(
				"[EditPost] Обробка зображень:",
				JSON.stringify(data.images, null, 2)
			);
			const allowedFormats = ["jpeg", "png", "gif"];
			const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ
			const maxImages = 10;

			const currentImageIds = currentAlbum.images.map((img) => img.id);

			// Обробка нових зображень (create)
			let createImages: { url: string }[] = [];
			if (data.images.create && Array.isArray(data.images.create)) {
				const deleteCount = Array.isArray(data.images.delete)
					? data.images.delete.length
					: data.images.delete
						? 1
						: 0;
				if (
					data.images.create.length +
					(currentAlbum.images.length - deleteCount) >
					maxImages
				) {
					console.error(
						"[EditPost] Перевищено ліміт зображень:",
						data.images.create.length +
						(currentAlbum.images.length - deleteCount)
					);
					return {
						status: "error",
						message: "Максимум 10 зображень дозволено",
					};
				}

				createImages = await Promise.all(
					data.images.create.map(async (image, index) => {
						if (
							typeof image !== "object" ||
							!image.url ||
							typeof image.url !== "string"
						) {
							console.error(
								"[EditPost] Некоректні дані зображення на позиції",
								index
							);
							throw new Error(
								`Некоректні дані зображення на позиції ${index}: потрібен об’єкт із полем url`
							);
						}

						if (image.url.startsWith("data:image")) {
							const matches = image.url.match(
								/^data:image\/(\w+);base64,(.+)$/
							);
							if (!matches) {
								console.error(
									"[EditPost] Невірний формат base64 на позиції",
									index
								);
								throw new Error(
									`Невірний формат base64 зображення на позиції ${index}`
								);
							}

							const [, ext, base64Data] = matches;
							if (!allowedFormats.includes(ext.toLowerCase())) {
								console.error(
									"[EditPost] Непідтримуваний формат зображення:",
									ext
								);
								throw new Error(
									`Непідтримуваний формат: ${ext}. Дозволено: JPEG, PNG, GIF`
								);
							}

							const buffer = Buffer.from(base64Data, "base64");
							if (buffer.length > maxSizeInBytes) {
								console.error(
									"[EditPost] Зображення занадто велике:",
									buffer.length
								);
								throw new Error(
									`Зображення на позиції ${index} занадто велике: ${Math.round(
										buffer.length / 1024 / 1024
									)} MB. Максимум 5 MB`
								);
							}

							const filename = `${Date.now()}-${Math.round(
								Math.random() * 1000000
							)}.${ext}`;
							const filePath = path.join(uploadDir, filename);

							await fs.writeFile(filePath, buffer);
							console.log(
								"[EditPost] Зображення збережено:",
								filePath
							);

							// Перевірка існування файлу
							try {
								await fs.access(filePath);
								createdImageUrls.push(filename);
								return { url: `uploads/${filename}` };
							} catch {
								console.error(
									"[EditPost] Файл не знайдено після збереження:",
									filePath
								);
								throw new Error(
									`Не вдалося зберегти зображення на позиції ${index}`
								);
							}
						}

						console.log(
							"[EditPost] Використано існуючий URL:",
							image.url
						);
						return { url: image.url };
					})
				);
			}

			// Обробка видалення зображень (delete)
			let deleteImageIds: number[] = [];
			if (data.images.delete) {
				const toDelete = Array.isArray(data.images.delete)
					? data.images.delete
					: [data.images.delete];
				deleteImageIds = toDelete
					.filter(
						(item): item is { id: number } =>
							typeof item === "object" &&
							"id" in item &&
							typeof item.id === "number"
					)
					.map((item) => item.id)
					.filter((id) => currentImageIds.includes(id));

				if (deleteImageIds.length > 0) {
					console.log(
						"[EditPost] Видаляються зображення з ID:",
						deleteImageIds
					);
					await prisma.image.deleteMany({
						where: {
							id: { in: deleteImageIds },
							albumId: id,
						},
					});
				}
			}

			if (createImages.length > 0) {
				updateData.images = { create: createImages };
			}
		}

		// Оновлення альбома
		console.log(
			"[EditPost] Дані для оновлення:",
			JSON.stringify(updateData, null, 2)
		);
		const updateAlbum = await prisma.album.update({
			where: { id },
			data: updateData,
			include: {
				images: true,
			},
		});

		// Нормалізація URL зображень
		const normalizedAlbum = {
			...updateAlbum,
			images: updateAlbum.images.map((img) => {
				const relativeUrl = img.url
					.replace(/\\/g, "/")
					.replace(/^uploads\/+/, "");
				const fullUrl = img.url.startsWith("http")
					? img.url
					: `${API_BASE_URL}/uploads/${relativeUrl}`;
				console.log(
					`[EditPost] Нормалізований URL зображення: ${fullUrl}`
				);
				return { ...img, url: fullUrl };
			}),
		};

		// Перевірка доступності файлів
		for (const img of normalizedAlbum.images) {
			if (!img.url.startsWith("http")) {
				const filePath = path.join(
					uploadDir,
					img.url.replace(/^uploads\//, "")
				);
				try {
					await fs.access(filePath);
					console.log(
						`[EditPost] Файл зображення доступний: ${filePath}`
					);
				} catch {
					console.error(
						`[EditPost] Файл зображення не знайдено: ${filePath}`
					);
					throw new Error(`Зображення не знайдено: ${img.url}`);
				}
			}
		}

		console.log(
			"[EditAlbum] альбом оновлено, зображення:",
			normalizedAlbum.images
		);
		return { status: "success", data: normalizedAlbum as Album };
	} catch (err) {
		console.error("[EditAlbum] Помилка:", err);

		// Очищення створених файлів
		for (const filename of createdImageUrls) {
			const filePath = path.join(
				__dirname,
				"..",
				"..",
				"public",
				"uploads",
				filename
			);
			console.log(`[EditAlbum] Видаляємо файл: ${filePath}`);
			await fs
				.unlink(filePath)
				.catch((e) =>
					console.error("[EditAlbum] Помилка видалення файлу:", e)
				);
		}
		return {
			status: "error",
			message:
				err instanceof Error
					? err.message
					: "Не вдалося оновити альбом",
		};
	}
}

async function deleteAlbum(id: number): Promise<IOkWithData<Album> | IError> {
	try {
		const deleteAlbum = await albumRepository.deleteAlbum(id);

		const result: Album = {
			...deleteAlbum,

			images: deleteAlbum.images.map((img) => ({
				id: img.id,
				albumId: img.albumId,
				url: img.url,
			})),
		};

		return { status: "success", data: result };
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
