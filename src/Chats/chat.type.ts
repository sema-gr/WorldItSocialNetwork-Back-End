import { Prisma } from "../generated/prisma";
import { IOkWithData } from "../types/types";
import { User } from "../userApp/types";

export type Chat = Prisma.ChatGroupGetPayload<{
	include:{
		members: true,
		chat_messages: true
	}
}>;
export type CorrectChatForCreate = Prisma.ChatGroupGetPayload<{
	include:{
		members: true,
		admin: true
	}
}>;

// export interface ICreateChatData{
// 	name: string,
// 	is_personal_chat: boolean,
// 	admin_id: number,
// 	avatar: string,
// 	members: User[],
// }

export type ChatInclude = Prisma.ChatGroupInclude;
export type CreateChat = Prisma.ChatGroupUncheckedCreateInput;
export type WhereChat = Prisma.ChatGroupWhereUniqueInput;

export interface IChatServerEvents {
	chatUpdate: (data: IChatUpdatePayload) => void;
}
export interface IChatClientEvents {
	joinChat: (data: IJoinChatPayload, callback: IJoinChatCallback) => void;
	leaveChat: (data: ILeaveChatPayload) => void;
}

export interface IJoinChatPayload {
	chatId: number;
}

export interface ILeaveChatPayload {
	chatId: number;
}

export type IJoinChatCallback = (
	response: IOkWithData<Chat>
) => void;

export type IChatUpdatePayload = Chat


// acknowledgment
// В Socket.io acknowledgment (callback) це функція, яка відправляє повідомлення в
// результаті якоїсь події (аналог http)