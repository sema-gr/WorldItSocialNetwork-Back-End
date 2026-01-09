import client from "../client/prismaClient";
import { CreateChat, WhereChat } from "./types";
import { errors, IErrors } from "../config/errorCodes";
import { Prisma } from "@prisma/client";

async function createChat(data: CreateChat) {
	const memberIds = [
		...(data.members?.map((m) => m.id) ?? []),
		data.admin_id,
	];

	const uniqueMemberIds = [...new Set(memberIds)];

	return client.chatGroup.create({
		data: {
			name: data.name,
			is_personal_chat: data.is_personal_chat,
			avatar: data.avatar || "",
			admin_id: data.admin_id,
			members: {
				create: uniqueMemberIds.map((id) => ({
					profile_id: id,
				})),
			},
		},
		include: {
			members: true,
			admin: true,
		},
	});
}

async function getAllChats() {
	try {
		const chat = await client.chatGroup.findMany({
			include: {
				chat_messages: true,
				members: {
					include: {
						profile: true,
					},
				},
				admin: true,
			},
		});

		return chat;
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code in Object.keys(errors)) {
				const errorKey: keyof IErrors = error.code;
				console.log(errors[errorKey]);
			}
		}
	}
}

async function getChat(where: WhereChat) {
	try {
		const chat = await client.chatGroup.findUniqueOrThrow({
			where: where,
			include: {
				chat_messages: true,
				members: {
					include: {
						profile: true,
					},
				},
				admin: true,
			},
		});
		return chat;
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code in Object.keys(errors)) {
				const errorKey: keyof IErrors = error.code;
				console.log(errors[errorKey]);
			}
		}
	}
}

async function deleteChat(where: { id: number }) {
	try {
		return await client.chatGroup.delete({
			where,
			include: {
				members: true,
				chat_messages: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error(error.code, error.message);
		}
		return null;
	}
}

const chatRepository = {
	createChat,
	getChat,
	getAllChats,
	deleteChat,
};
export default chatRepository;
