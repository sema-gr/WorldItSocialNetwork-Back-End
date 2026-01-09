import { NextFunction } from "express";
import { chatService } from "./chatService";
import { Request, Response } from "express";

async function getChats(req: Request, res: Response, next: NextFunction) {
	const userId = res.locals.userId;
	const chat = await chatService.getChats(userId);
	res.json(chat);
}

async function getChat(req: Request, res: Response, next: NextFunction) {
	let id = req.params.id;
	const chat = await chatService.getChat(+id);
	res.json(chat);
}

async function createChat(req: Request, res: Response) {
	const data = req.body;
	data.admin_id = res.locals.userId;
	const chat = await chatService.createChat(data);
	res.json(chat);
}

async function deleteChat(req: Request, res: Response) {
	let id = req.params.id;
	const chat = await chatService.deleteChat(+id);
	res.json(chat);
}

export const chatController = {
	createChat,
	getChat,
	getChats,
	deleteChat,
};
