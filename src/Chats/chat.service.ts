import { IError, IOk, IOkWithData } from "../types/types";
import chatRepository from "./chat.repository";
import { Chat, CorrectChatForCreate, CreateChat, WhereChat } from "./chat.type";


async function createChat(data: CreateChat): Promise<IOkWithData<CorrectChatForCreate> | IError> {
    const result = await chatRepository.createChat(data);
    
    if (!result) {
        return { status: "error", message: "Error" }
    }
    return { status: "success", data: result }
}

async function getChat(id: number): Promise<IOkWithData<Chat> | IError> {
    const result = await chatRepository.getChat({ id });
    if (!result) {
        return { status: "error", message: "Error" }
    }
    return { status: "success", data: result }
}

async function joinChat(id: number): Promise<IOkWithData<Chat> | IError> {
    const result = await chatRepository.getChat({ id: id });

    if (!result) {
        return { status: "error", message: "Error" }
    }

    return { status: "success", data: result }
}

export const chatService = {
    createChat,
    getChat,
    joinChat
}