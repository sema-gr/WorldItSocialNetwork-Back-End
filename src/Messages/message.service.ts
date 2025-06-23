import { IError, IOk, IOkWithData } from "../types/types";
import { CreateMessage, Message } from "./message.type";
import messageRepository from "./messages.repository";


async function createMessage(data: CreateMessage): Promise<IOkWithData<CreateMessage> | IError> {
    const result = await messageRepository.createMessage(data);
    if (!result) {
        return { status: "error", message: "Error" }
    }
    return { status: "success", data: result }
}

async function getMessage(id: number): Promise<IOkWithData<Message> | IError> {
    const result = await messageRepository.getMessage({ id });
    if (!result) {
        return { status: "error", message: "Error" }
    }
    return { status: "success", data: result }
}

export const messageService = {
    createMessage,
    getMessage,
}