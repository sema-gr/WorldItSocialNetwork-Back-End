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
	let body = req.body
	body.author_id = res.locals.userId
	const result = await albumService.createAlbum(body)
	if (result.status == "error") {
		res.json(result)
	} else {
		res.json(result.data);
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
