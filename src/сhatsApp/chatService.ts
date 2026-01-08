import client from "../client/prismaClient";
import { MessagePayload } from "../messagesApp/types";
import { IError, IOkWithData } from "../types/types";
import chatRepository from "./chatRepository";
import { Chat, CorrectChatForCreate, CreateChat } from "./types";

async function createChat(
	data: CreateChat,
): Promise<IOkWithData<CorrectChatForCreate> | IError> {
	try {
		if (data.is_personal_chat && data.members?.length) {
			const memberIds = data.members.map((m) => m.id);

			const existingChat = await client.chatGroup.findFirst({
				where: {
					is_personal_chat: true,
					members: {
						every: {
							profile_id: { in: memberIds },
						},
					},
				},
				include: { members: true, admin: true },
			});

			if (existingChat) {
				return { status: "success", data: existingChat };
			}
		}

		const chat = await chatRepository.createChat(data);
		return { status: "success", data: chat };
	} catch {
		return { status: "error", message: "Cannot create chat" };
	}
}

async function getChat(id: number): Promise<IOkWithData<Chat> | IError> {
	const result = await chatRepository.getChat({ id });
	if (!result) {
		return { status: "error", message: "Error" };
	}
	return { status: "success", data: result };
}

async function getChats(): Promise<IOkWithData<Chat[]> | IError> {
	const result = await chatRepository.getAllChats();
	if (!result) {
		return { status: "error", message: "Error" };
	}
	return { status: "success", data: result };
}

async function joinChat(id: number): Promise<IOkWithData<Chat> | IError> {
	const result = await chatRepository.getChat({ id: id });

	if (!result) {
		return { status: "error", message: "Error" };
	}

	return { status: "success", data: result };
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

async function deleteChat(id: number): Promise<IOkWithData<Chat> | IError> {
	const result = await chatRepository.deleteChat({ id });
	console.log("Deleted chat result:", result);
	if (!result) {
		return { status: "error", message: "Error" };
	}
	return { status: "success", data: result };
}

export const chatService = {
	createChat,
	getChat,
	joinChat,
	getChats,
	saveMessage,
	deleteChat,
};
