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
					const savedPath = await saveBase64Image(img.url);
					console.log("Successfully saved image:", savedPath);
					imagesToProcess.push({ url: savedPath });
				} catch (imgError) {
					console.error("Failed to process image:", imgError);
				}
			}
			newPost.images = imagesToProcess
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
		res.json(result);
	}
}

const postController = {
	createPost,
	deletePost,
	editPost,
	getPosts,
};

export default postController;
