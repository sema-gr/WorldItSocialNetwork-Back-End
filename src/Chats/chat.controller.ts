import { NextFunction } from "express";
import { chatService } from "./chat.service";
import { Request, Response } from 'express'

async function getChats(req: Request, res: Response, next: NextFunction) {
    const chat = await chatService.getChats()
    res.json(chat)
}

async function getChat(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id
    const chat = await chatService.getChat(+id)
    res.json(chat)
}

async function createChat(req: Request, res: Response){
    const data = req.body
    data.admin_id = res.locals.userId
    const chat = await chatService.createChat(data)
    res.json(chat)
    
}

export const chatController = {
    createChat,
    getChat,
    getChats
}