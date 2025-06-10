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

const friendshipController = {
    createFriendship: createFriendship
}


export default friendshipController