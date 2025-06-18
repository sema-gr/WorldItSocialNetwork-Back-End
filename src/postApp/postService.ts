import { IError, IOkWithData } from "../types/types";
import { postRepository } from "./postRepository";
import { Post, CreatePost, IUpdatePost, CreatePostData, Image, CreatePostBody, CreateImageData, ImageCreate, UpdateCreatePost } from "./types";
import fs from "fs/promises";
import path from "path";
import prisma from "../client/prismaClient";
import { Prisma, Tags } from "../generated/prisma";

async function getPosts(): Promise<IOkWithData<Post[]> | IError> {
  const posts = await postRepository.getPosts();

  if (!posts) {
    return { status: "error", message: "No posts found" };
  }

  return { status: "success", data: posts };
}

async function createPost(data: CreatePostBody): Promise<IOkWithData<Post> | IError> {
  try {
    // Валідація тегів
    let tagsInput: { create: { tag: { connect: { id: number, name: string } } }[] } | undefined;
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
          return { tag: { connect: { id: tag.id, name: tag.name } } };
        })
      );

      tagsInput = {
        create: tagConnections,
      };
    }

    let imageInput: { create: { image: { connect: { id: number, filename: string, file: string } } }[] } | undefined;
    if (Array.isArray(data.images)) {
      if (data.images.length > 10) {
        return { status: "error", message: "Максимум 10 зображень дозволено" };
      }

      const imageConnections = await Promise.all(
        data.images.map(async (mapImage) => {
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

    // Формування даних поста
    const postData: CreatePost = {
      title: data.title,
      author_id: data.author_id,
      tags: tagsInput,
      content: data.content,
      images: imageInput,
    };

    console.log("Post data to be created:", JSON.stringify(postData, null, 2));

    // Створення поста
    const newPost = await prisma.post.create({
      data: postData,
      include: {
        images: { select: { image: true } },
        tags: { include: { tag: true } },
      },
    });

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
    const currentPost = await prisma.post.findUnique({
      where: { id },
      include: {
        images: {
          select: {
            image: true
          }
        },
        tags: {
          select: {
            tag: true
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
    const updateData: UpdateCreatePost = {
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

      // const currentTagNames: string[] = currentPost.tags.map((t) => t.tag.name);
      // let correctTags: Prisma.PostTagsUpdateManyWithoutPostNestedInput[] = [];

      // if (currentTagNames.length > 0) {
      //   currentTagNames.forEach(async (tag) => {
      //     let findUnique = await prisma.tags.findUnique({
      //       where: { name: tag }
      //     })
      //     if (!findUnique) {
      //       findUnique = await prisma.tags.delete({
      //         where: { name: tag }
      //       });
      //     } else {
      //       const tagsToAdd = {
      //         create:{
      //           tag: { connect: { id: findUnique.id, name: findUnique.name } }
      //         }
      //       }
      //       correctTags.push(tagsToAdd);
      //     }
      //   });
      // }

      // updateData.tags = correctTags;

      let tagsInput: { create: { tag: { connect: { id: number, name: string } } }[] } | undefined;
      const tagConnections = await Promise.all(
        data.tags.map(async (tagName: string) => {
          let tag = await prisma.tags.findFirst({ where: { name: tagName } });
          if (!tag) {
            tag = await prisma.tags.create({ data: { name: tagName } });
          }
          return { tag: { connect: { id: tag.id, name: tag.name } } };
        })
      );

      tagsInput = {
        create: tagConnections,
      };
      updateData.tags = tagsInput;
    }

    if (currentPost.images)
      // Обробка зображень
      if (data.images) {
        console.log("[EditPost] Обробка зображень:", JSON.stringify(data.images, null, 2));
        const allowedFormats = ["jpeg", "png", "gif"];
        const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ
        const maxImages = 10;

        const currentImageIds = currentPost.images.map((img) => img.image.id);

        // Обробка нових зображень (create)
        let createImages: { url: string }[] = [];
        data.images.forEach((img) => {
          prisma.image.delete({
            where: { id: img.id }
          })
        })

        createImages = await Promise.all(
          data.images.map(async (image, index) => {
            if (typeof image !== "object" || !image.url) {
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
            return { url: image.url };
          })
        );

        let imageInput: { create: { image: { connect: { id: number, filename: string, file: string } } }[] } | undefined;
        if (Array.isArray(data.images)) {
          if (data.images.length > 10) {
            return { status: "error", message: "Максимум 10 зображень дозволено" };
          }

          const imageConnections = await Promise.all(
            data.images.map(async (mapImage) => {
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

        updateData.images = imageInput;

      }

    // Оновлення поста
    console.log("[EditPost] Дані для оновлення:", JSON.stringify(updateData, null, 2));
    const updatedPost = await prisma.post.update({
      where: { id },
      data: updateData,
      include: {
        images: { include: { image: true } },
        tags: { include: { tag: true } },
      },
    });

    // Нормалізація URL зображень
    const normalizedPost = {
      ...updatedPost,
      images: updatedPost.images.map((img) => {
        const relativeUrl = img.image.filename.replace(/\\/g, "/").replace(/^uploads\/+/, "");
        const fullUrl = img.image.filename.startsWith("http") ? img.image.filename : `${API_BASE_URL}/uploads/${relativeUrl}`;
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

    // const result: Post = {
    //   ...deletedPost,
    //   tags: deletedPost.tags.map((t) => ({
    //     userPostId: t.tag.userPostId,
    //     tagId: t.tag.id,
    //     tag: t.tag,
    //   })),
    //   images: deletedPost.images.map((img) => ({
    //     id: img.id,
    //     userPostId: img.userPostId,
    //     url: img.image.filename,
    //   })),
    // };

    return { status: "success", data: deletedPost };
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