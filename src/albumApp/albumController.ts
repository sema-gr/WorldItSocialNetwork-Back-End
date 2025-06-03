import { Request, Response } from "express";
import { saveBase64Image } from "../../utils/fileUtil";
import albumService from "./albumService";

async function getAlbums(req: Request, res: Response) {
	const result = await albumService.getAlbums();
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}


async function createAlbum(req: Request, res: Response) {
	try {
		const newAlbum = req.body;
		console.log(
			"Raw input data:",
			JSON.stringify(
				{
					...newAlbum,
					images: newAlbum.images ? "EXISTS" : "NULL",
				},
				null,
				2
			)
		);

		if (newAlbum.images) {
			console.log("Original images type:", typeof newAlbum.images);

			let imagesToProcess: string[] = [];

			if (Array.isArray(newAlbum.images)) {
				imagesToProcess = newAlbum.images;
			} else if (newAlbum.images.create) {
				console.warn("Converting Prisma format to array");
				imagesToProcess = newAlbum.images.create.map((img: any) => {
					return img.url || img.imageUrl || img;
				});
			}

			console.log("Images to process count:", imagesToProcess.length);

			newAlbum.images = [];
			for (const img of imagesToProcess) {
				try {
					const savedPath = await saveBase64Image(img);
					console.log("Successfully saved image:", savedPath);
					newAlbum.images.push(savedPath);
				} catch (imgError) {
					console.error("Failed to process image:", imgError);
				}
			}
		}

		const result = await albumService.createAlbum(newAlbum);
	} catch (error) {
		console.error("Full controller error:", error);
	}
}

async function deleteAlbum(req: Request, res: Response) {
	let id = req.params.id;
	const result = await albumService.deleteAlbum(+id);
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
		console.log("Post deleted successfully");
	}
}

async function editAlbum(req: Request, res: Response) {
	let body = req.body;
	let id = req.params.id;
	const result = await albumService.editAlbum(body, +id);
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}

const albumController = {
	createAlbum,
	deleteAlbum,
	editAlbum,
	getAlbums,
};

export default albumController;
