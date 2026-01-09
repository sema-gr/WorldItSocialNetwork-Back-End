import { IError, IOk, IOkWithData } from "../types/types";
import { CreateMessage, DeletedMessagesInfo, Message } from "./types";
import messageRepository from "./messagesRepository";
import { saveBase64Image } from "../utils/fileUtil";

async function createMessage(
	data: CreateMessage,
): Promise<IOkWithData<CreateMessage> | IError> {
	try {
		if (
			data.attached_image &&
			data.attached_image.startsWith("data:image/")
		) {
			console.log("Data перед створенням в базі:", data);
			const savedPath = await saveBase64Image(data.attached_image);
			data.attached_image = savedPath;
		}

		const result = await messageRepository.createMessage(data);
		if (!result) {
			return { status: "error", message: "Error" };
		}
		return { status: "success", data: result };
	} catch (error) {
		console.error("Error in createMessage:", error);
		return {
			status: "error",
			message: "Failed to save image or create message",
		};
	}
}

async function getMessage(id: number): Promise<IOkWithData<Message> | IError> {
	const result = await messageRepository.getMessage({ id });
	if (!result) {
		return { status: "error", message: "Error" };
	}
	return { status: "success", data: result };
}

async function deleteAllMessagesFromChat(
	id: number,
): Promise<IOkWithData<DeletedMessagesInfo> | IError> {
	try {
		const result = await messageRepository.deleteAllMessagesFromChat(id);
		return { status: "success", data: result };
	} catch (error) {
		return { status: "error", message: "Не вдалося видалити повідомлення" };
	}
}

export const messageService = {
	createMessage,
	getMessage,
	deleteAllMessagesFromChat,
};
