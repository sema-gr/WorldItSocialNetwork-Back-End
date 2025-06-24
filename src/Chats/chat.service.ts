import client from "../client/prismaClient";
import { MessagePayload } from "../Messages/message.type";
import { IError, IOk, IOkWithData } from "../types/types";
import chatRepository from "./chat.repository";
import { Chat, CorrectChatForCreate, CreateChat, WhereChat } from "./chat.type";


async function createChat(data: CreateChat): Promise<IOkWithData<CorrectChatForCreate> | IError> {

    const existingChat = await client.chatGroup.findFirst({
        where: { name: data.name },
        include: {
            members: true
        }
    })

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

async function getChats(): Promise<IOkWithData<Chat[]> | IError> {
    const result = await chatRepository.getAllChats();
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

async function saveMessage(data: MessagePayload) {
  try {
    await client.chatMessage.create({
      data: data,
    });
  } catch (error) {
    console.error("Ошибка при сохранении сообщения:", error);
  }
}

export const chatService = {
    createChat,
    getChat,
    joinChat,
    getChats,
    saveMessage
}