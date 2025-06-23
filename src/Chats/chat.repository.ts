import { Prisma } from "../generated/prisma";
import client from "../client/prismaClient";
import { CreateChat, WhereChat } from "./chat.type";
import { errors, IErrors } from "../config/errorCodes";

async function createChat(data: CreateChat) {
    try {
        const correctedData = {
            name: data.name,
            is_personal_chat: data.is_personal_chat,
            avatar: data.avatar,
            admin_id: data.admin_id,
            members: Array.isArray(data.members)
                ? {
                    create: data.members.map(member => ({
                        profile_id: member.id
                    }))
                }
                : undefined
        };

        const chatGroup = await client.chatGroup.create({
            data: correctedData,
            include: {
                members: true,
                admin: true
            }
        });

        return chatGroup;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(`Prisma error code: ${error.code}, message: ${error.message}, meta:`, error.meta);
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code;
                console.error(errors[errorKey]);
            }
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}

async function getAllChats() {
    try {
        const chat = await client.chatGroup.findMany({
            include: {
                chat_messages: true,
                members: true,
                admin: true,
            }
        })

        return chat
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
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
                members: true,
                admin: true

            }
        })
        return chat
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

const chatRepository = {
    createChat,
    getChat,
    getAllChats
}
export default chatRepository