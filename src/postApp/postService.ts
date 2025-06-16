import { Prisma } from "@prisma/client";
import { IError, IOkWithData } from "../types/types";
import { postRepository } from "./postRepository";
import { Post, CreatePost, IUpdatePost, CreatePostData } from "./types";
import fs from "fs/promises";
import path from "path";
import prisma from "../client/prismaClient";

async function getPosts(): Promise<IOkWithData<Post[]> | IError> {
  const posts = await postRepository.getPosts();

  if (!posts) {
    return { status: "error", message: "No posts found" };
  }

  return { status: "success", data: posts };
}

async function createPost(data: CreatePost): Promise<IOkWithData<Post> | IError> {
  try {
    // Логування вхідних даних
    console.log("Raw input data:", JSON.stringify(data, null, 2));

    // Валідація тегів
    let tagsInput: { connect: { id: number }[] } | undefined;
    if (Array.isArray(data.tags)) {
      if (data.tags.length > 10) {
        return { status: "error", message: "Максимум 10 тегів дозволено" };
      }
      for (const tag of data.tags) {
        if (typeof tag !== "string" || tag.length > 50) {
          return { status: "error", message: "Кожен тег має бути рядком не довшим за 50 символів" };
        }
      }

      const tagConnections = await Promise.all(
        data.tags.map(async (tagName: string) => {
          let tag = await prisma.tags.findFirst({ where: { name: tagName } });
          if (!tag) {
            tag = await prisma.tags.create({ data: { name: tagName } });
          }
          return { id: tag.id };
        })
      );

      tagsInput = {
        connect: tagConnections,
      };
    }

    // Валідація зображень
    let imagesInput: CreatePostData | undefined;
    const allowedFormats = ["jpeg", "png", "gif"];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ

    console.log("Original images type:", typeof data.images);
    if (data.images) {
      let imagesToProcess: { url: string }[] = [];

      if ("create" in data.images && Array.isArray(data.images.create)) {
        imagesToProcess = data.images.create;
        console.log("Images to process count:", imagesToProcess.length);
      }
      // Обробка формату string[]
      else if (Array.isArray(data.images)) {
        imagesToProcess = data.images.map((url) => ({ url }));
        console.log("Images to process count:", imagesToProcess.length);
      }

      if (imagesToProcess.length > 10) {
        return { status: "error", message: "Максимум 10 зображень дозволено" };
      }

      const imageUrls = await Promise.all(
        imagesToProcess.map(async (image, index) => {
          if (typeof image !== "object" || !("url" in image) || typeof image.url !== "string") {
            throw new Error(`Некоректні дані зображення на позиції ${index}: потрібен об’єкт із полем url`);
          }
          if (image.url.startsWith("data:image")) {
            const matches = image.url.match(/^data:image\/(\w+);base64,(.+)$/);
            if (!matches) {
              throw new Error(`Невірний формат base64 зображення на позиції ${index}`);
            }

            const [, ext, base64Data] = matches;
            if (!allowedFormats.includes(ext.toLowerCase())) {
              throw new Error(`Непідтримуваний формат зображення на позиції ${index}: ${ext}. Дозволені: JPEG, PNG, GIF`);
            }

            const buffer = Buffer.from(base64Data, "base64");
            if (buffer.length > maxSizeInBytes) {
              throw new Error(`Зображення на позиції ${index} занадто велике: ${Math.round(buffer.length / 1024 / 1024)} МБ. Максимум 5 МБ`);
            }

            const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");
            await fs.mkdir(uploadDir, { recursive: true });
            console.log(`Directory ${uploadDir} exists: ${await fs.access(uploadDir).then(() => true).catch(() => false)}`);

            const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
            const filePath = path.join(uploadDir, filename);

            await fs.writeFile(filePath, buffer);
            console.log(`File saved: ${filePath}`);
            console.log(`Successfully saved image: uploads/${filename}`);
            return { url: `uploads/${filename}` };
          }
          return image;
        })
      );

      imagesInput = {
        create: imageUrls,
      };
    }

    // Формування даних поста
    const postData: CreatePost = {
      title: data.title,
      authorId: data.authorId,
      tags: tagsInput,
      content: data.content,
      links: data.links ?? undefined,
      views: data.views ?? undefined,
      likes: data.likes ?? undefined,
      images: imagesInput,
    };

    console.log("Post data to be created:", JSON.stringify(postData, null, 2));

    // Створення поста
    const newPost = await prisma.userPost.create({
      data: postData,
      include: {
        images: {
          select: {
            id: true,
            url: true,
            uploadedAt: true
          }
        },
        tags: {
          select: {
            name: true
          }
        }
      }
    });

    // Логування результату
    console.log("Post created with images:", newPost.images);

    return { status: "success", data: newPost };
  } catch (err) {
    console.error("Помилка в createPost:", err);
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Не вдалося створити пост",
    };
  }
}

async function editPost(data: IUpdatePost, id: number): Promise<IOkWithData<Post> | IError> {
  const createdImageUrls: string[] = [];

  try {
    const API_BASE_URL = "http://192.168.1.104:3000";
    const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");

    // Логування вхідних даних
    console.log("[EditPost] Вхідні дані:", JSON.stringify(data, null, 2));

    // Створюємо директорію для зображень
    await fs.mkdir(uploadDir, { recursive: true });
    console.log(`[EditPost] Директорія ${uploadDir} створена/існує`);

    // Отримуємо поточний пост
    const currentPost = await prisma.userPost.findUnique({
      where: { id },
      include: {
        images: {
          select: {
            id: true,
            url: true,
            uploadedAt: true
          }
        },
        tags: {
          select: {
            name: true
          }
        },
        likes: true,
        views: true,
      }
    });

    if (!currentPost) {
      console.error("[EditPost] Пост із ID", id, "не знайдено");
      return { status: "error", message: "Пост не знайдено" };
    }

    // Підготовка даних для оновлення
    const updateData: IUpdatePost = {
      title: typeof data.title === "string" ? data.title.trim() : data.title ?? currentPost.title,
      content: typeof data.content === "string" ? data.content.trim() : data.content ?? currentPost.content,
    };

    // Обробка тегів
    if (data.tags && Array.isArray(data.tags)) {
      if (data.tags.length > 10) {
        console.error("[EditPost] Занадто багато тегів:", data.tags.length);
        return { status: "error", message: "Максимум 10 тегів дозволено" };
      }

      const validTags = data.tags
        .filter((tag): tag is string => typeof tag === "string" && tag.trim().length > 0)
        .filter((tag) => tag.length <= 50);

      if (validTags.length !== data.tags.length) {
        console.error("[EditPost] Некоректні теги:", data.tags);
        return { status: "error", message: "Некоректні теги або занадто довгі (макс. 50 символів)" };
      }

      const currentTagNames = currentPost.tags.map((t) => t.name);
      const tagsToAdd = validTags.filter((tag) => !currentTagNames.includes(tag));
      const tagsToRemove = currentTagNames.filter((tag) => !validTags.includes(tag));

      if (tagsToRemove.length > 0) {
        console.log("[EditPost] Видаляються теги:", tagsToRemove);
        await prisma.userPost.deleteMany({
          where: {
            tags: {
            id: { in: tagsToRemove.map((tag) => tag.) },
          },
        });
      }

      if (tagsToAdd.length > 0) {
        console.log("[EditPost] Додаються теги:", tagsToAdd);
        const tagConnections = await Promise.all(
          tagsToAdd.map(async (tagName: string) => {
            let tag = await prisma.tags.findFirst({ where: { name: tagName } });
            if (!tag) {
              tag = await prisma.tags.create({ data: { name: tagName } });
              console.log("[EditPost] Створено новий тег:", tagName);
            }
            return { tagId: tag.id };
          })
        );

        updateData.tags = {
          create: tagConnections.map((connection) => ({
            tag: { connect: { id: connection.tagId } },
          })),
        };
      }
    }

    // Обробка зображень
    if (data.images) {
      console.log("[EditPost] Обробка зображень:", JSON.stringify(data.images, null, 2));
      const allowedFormats = ["jpeg", "png", "gif"];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ
      const maxImages = 10;

      const currentImageIds = currentPost.images.map((img) => img.id);

      // Обробка нових зображень (create)
      let createImages: { url: string }[] = [];
      if (data.images.create && Array.isArray(data.images.create)) {
        const deleteCount = Array.isArray(data.images.delete) ? data.images.delete.length : data.images.delete ? 1 : 0;
        if (data.images.create.length + (currentPost.images.length - deleteCount) > maxImages) {
          console.error("[EditPost] Перевищено ліміт зображень:", data.images.create.length + (currentPost.images.length - deleteCount));
          return { status: "error", message: "Максимум 10 зображень дозволено" };
        }

        createImages = await Promise.all(
          data.images.create.map(async (image, index) => {
            if (typeof image !== "object" || !image.url || typeof image.url !== "string") {
              console.error("[EditPost] Некоректні дані зображення на позиції", index);
              throw new Error(`Некоректні дані зображення на позиції ${index}: потрібен об’єкт із полем url`);
            }

            if (image.url.startsWith("data:image")) {
              const matches = image.url.match(/^data:image\/(\w+);base64,(.+)$/);
              if (!matches) {
                console.error("[EditPost] Невірний формат base64 на позиції", index);
                throw new Error(`Невірний формат base64 зображення на позиції ${index}`);
              }

              const [, ext, base64Data] = matches;
              if (!allowedFormats.includes(ext.toLowerCase())) {
                console.error("[EditPost] Непідтримуваний формат зображення:", ext);
                throw new Error(`Непідтримуваний формат: ${ext}. Дозволено: JPEG, PNG, GIF`);
              }

              const buffer = Buffer.from(base64Data, "base64");
              if (buffer.length > maxSizeInBytes) {
                console.error("[EditPost] Зображення занадто велике:", buffer.length);
                throw new Error(`Зображення на позиції ${index} занадто велике: ${Math.round(buffer.length / 1024 / 1024)} MB. Максимум 5 MB`);
              }

              const filename = `${Date.now()}-${Math.round(Math.random() * 1000000)}.${ext}`;
              const filePath = path.join(uploadDir, filename);

              await fs.writeFile(filePath, buffer);
              console.log("[EditPost] Зображення збережено:", filePath);

              // Перевірка існування файлу
              try {
                await fs.access(filePath);
                createdImageUrls.push(filename);
                return { url: `uploads/${filename}` };
              } catch {
                console.error("[EditPost] Файл не знайдено після збереження:", filePath);
                throw new Error(`Не вдалося зберегти зображення на позиції ${index}`);
              }
            }

            console.log("[EditPost] Використано існуючий URL:", image.url);
            return { url: image.url };
          })
        );
      }

      // Обробка видалення зображень (delete)
      let deleteImageIds: number[] = [];
      if (data.images.delete) {
        const toDelete = Array.isArray(data.images.delete) ? data.images.delete : [data.images.delete];
        deleteImageIds = toDelete
          .filter((item): item is { id: number } => typeof item === "object" && "id" in item && typeof item.id === "number")
          .map((item) => item.id)
          .filter((id) => currentImageIds.includes(id));

        if (deleteImageIds.length > 0) {
          console.log("[EditPost] Видаляються зображення з ID:", deleteImageIds);
          await prisma.image.deleteMany({
            where: {
              id: { in: deleteImageIds },
              userPostId: id,
            },
          });
        }
      }

      if (createImages.length > 0) {
        updateData.images = { create: createImages };
      }
    }

    // Оновлення поста
    console.log("[EditPost] Дані для оновлення:", JSON.stringify(updateData, null, 2));
    const updatedPost = await prisma.userPost.update({
      where: { id },
      data: updateData,
      include: {
        images: true,
        tags: { include: { tag: true } },
      },
    });

    // Нормалізація URL зображень
    const normalizedPost = {
      ...updatedPost,
      images: updatedPost.images.map((img) => {
        const relativeUrl = img.url.replace(/\\/g, "/").replace(/^uploads\/+/, "");
        const fullUrl = img.url.startsWith("http") ? img.url : `${API_BASE_URL}/uploads/${relativeUrl}`;
        console.log(`[EditPost] Нормалізований URL зображення: ${fullUrl}`);
        return { ...img, url: fullUrl };
      }),
    };

    // Перевірка доступності файлів
    for (const img of normalizedPost.images) {
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

    console.log("Пост оновлено, зображення:", normalizedPost.images);
    return { status: "success", data: normalizedPost as Post };
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

async function deletePost(id: number): Promise<IOkWithData<Post> | IError> {
  try {
    const deletedPost = await postRepository.deletePost(id);

    const result: Post = {
      ...deletedPost,
      tags: deletedPost.tags.map((t) => ({
        userPostId: t.userPostId,
        tagId: t.tagId,
        tag: t.tag,
      })),
      images: deletedPost.images.map((img) => ({
        id: img.id,
        userPostId: img.userPostId,
        url: img.url,
      })),
    };

    return { status: "success", data: result };
  } catch (error) {
    console.error("Error in deletePost service:", error);
    return {
      status: "error",
      message:
        error instanceof Error
          ? error.message
          : "Failed to delete post",
    };
  }
}

const postService = {
  createPost,
  deletePost,
  editPost,
  getPosts,
};

export default postService;