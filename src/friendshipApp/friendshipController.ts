import friendshipService from "./friendshipService";
import { Request, Response } from "express";

async function createFriendship(req: Request, res: Response) {
	let body = req.body
	const result = await friendshipService.createFriendship(body)
	if (result.status == "error") {
		res.json(result)
	} else {
		res.json(result.data);
	}
}
async function getFriendship(req: Request, res: Response) {
	const result = await friendshipService.getFriendship();
	if (result.status == "error") {
		res.json("error");
	} else {
		res.json(result.data);
	}
}
const friendshipController = {
    createFriendship: createFriendship,
	getFriendship: getFriendship
}


export default friendshipController