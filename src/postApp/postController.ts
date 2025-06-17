import { Request, Response } from "express";
import postService from "./postService";
import { saveBase64Image } from "../../utils/fileUtil";
import { CreatePost, CreatePostBody } from "./types";

async function getPosts(req: Request, res: Response) {
	const result = await postService.getPosts();
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}


async function createPost(req: Request<{}, {}, CreatePostBody>, res: Response) {
	try {
		const newPost = req.body;
		let imagesToProcess: { url: string }[] = [];

		if (newPost.images) {
			console.log("Original images type:", typeof newPost.images);

			for (const img of newPost.images) {
				try {
					const allowedFormats = ["jpeg", "png", "gif"];
					const maxSizeInBytes = 5 * 1024 * 1024; // 5 МБ

					const imageUrls = await Promise.all(
						imagesToProcess.map(async (image, index) => {
							if (typeof image !== "object" || !("filename" in image) || typeof image.filename !== "string") {
								throw new Error(`Некоректні дані зображення на позиції ${index}: потрібен об’єкт із полем filename`);
							}
							if (image.filename.startsWith("data:image")) {
								const matches = image.filename.match(/^data:image\/(\w+);base64,(.+)$/);
								if (!matches) {
									throw new Error(`Невірний формат base64 зображення на позиції ${index}`);
								}

								const [, ext, base64Data] = matches;
								if (!allowedFormats.includes(ext.toLowerCase())) {
									throw new Error(`Непідтримуваний формат зображення на позиції ${index}: ${ext}. Дозволені: JPEG, PNG, GIF`);
								}
							}
							return image.filename;
						})
					);

					const savedPath = await saveBase64Image(img.url);
					console.log("Successfully saved image:", savedPath);
					imagesToProcess.push({ url: savedPath });
				} catch (imgError) {
					console.error("Failed to process image:", imgError);
				}
			}
			newPost.images = imagesToProcess
		}

		// newPost.images = [name, name]

		const result = await postService.createPost(newPost);

		if (result.status == "error") {
			res.json("error");
		} else {
			res.json(result.data);
		}

	} catch (error) {
		console.error("Full controller error:", error);
	}
}

async function deletePost(req: Request, res: Response) {
	let id = req.params.id;
	const result = await postService.deletePost(+id);
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
		console.log("Post deleted successfully");
	}
}

async function editPost(req: Request, res: Response) {
	let body = req.body;
	let id = req.params.id;
	const result = await postService.editPost(body, +id);
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}

const postController = {
	createPost,
	deletePost,
	editPost,
	getPosts,
};

export default postController;
