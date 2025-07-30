import { Request, Response } from "express";
import { messageService } from "./message.service"


async function createMessage(req: Request, res: Response) {
    const body = req.body;
    body.ownerId = res.locals.userId
    const result = await messageService.createMessage(body)
    if (result.status == "error") {
        return;
    }
    res.json(result);
}

async function getMessage(req: Request, res: Response) {
    const id = req.params.id;
    const result = await messageService.getMessage(+id)
    if (result.status == "error") {
        return;
    }
    res.json(result);
}

async function deleteAllMessagesFromChat(req: Request, res: Response) {
    let id = req.params.id;
    const result = await messageService.deleteAllMessagesFromChat(+id);
    if (result.status == "error") {
        res.json("error");
    } else {
        res.json(result.data);
        console.log("Message deleted successfully");
    }
}


export const messageController = {
    getMessage,
    createMessage,
    deleteAllMessagesFromChat
}