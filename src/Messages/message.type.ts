import { Prisma } from "../generated/prisma";
import { IOkWithData } from "../types/types";

export type Message = Prisma.ChatMessageGetPayload<{}>
export type MessageWhereUnique = Prisma.ChatMessageWhereUniqueInput
export type CreateMessage = Prisma.ChatMessageUncheckedCreateInput
export type MessageInclude = Prisma.ChatMessageInclude

export type MessagePayload = Omit<Message, "id" | "chatAsLastMessageId">

export interface IMessageServerEvents {
    newMessage: (
        data: NewMessagePayload
    ) => void
}
export interface IMessageClientEvents {
    sendMessage: (
        data: SendMessagePayload
    ) => void
}

type NewMessagePayload = CreateMessage;
type SendMessagePayload = MessagePayload;


export interface IMessageService{ 
    getMessage: (
        id: number
    ) => Promise<IOkWithData<Message>>,
    createMessage: (
        data: CreateMessage
    ) => Promise<IOkWithData<Message>>
}