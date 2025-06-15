import { Request, Response } from "express";
import postService from "./postService";
import { saveBase64Image } from "../../utils/fileUtil";

async function getPosts(req: Request, res: Response) {
	const result = await postService.getPosts();
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}


async function createPost(req: Request, res: Response) {
	try {
		const newPost = req.body;
		console.log(
			"Raw input data:",
			JSON.stringify(
				{
					...newPost,
					images: newPost.images ? "EXISTS" : "NULL",
				},
				null,
				2
			)
		);

		if (newPost.images) {
			console.log("Original images type:", typeof newPost.images);

			let imagesToProcess: string[] = [];

			if (Array.isArray(newPost.images)) {
				imagesToProcess = newPost.images;
			} else if (newPost.images.create) {
				console.warn("Converting Prisma format to array");
				imagesToProcess = newPost.images.create.map((img: any) => {
					return img.url || img.imageUrl || img;
				});
			}

			console.log("Images to process count:", imagesToProcess.length);

			newPost.images = [];
			for (const img of imagesToProcess) {
				try {
					const savedPath = await saveBase64Image(img);
					console.log("Successfully saved image:", savedPath);
					newPost.images.push(savedPath);
				} catch (imgError) {
					console.error("Failed to process image:", imgError);
				}
			}
		}

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
