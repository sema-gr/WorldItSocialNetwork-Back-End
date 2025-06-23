import { Prisma } from "../generated/prisma";
import client from "../client/prismaClient";
import { errors, IErrors } from "../config/errorCodes";
import { CreateMessage, MessageWhereUnique } from "./message.type";

async function createMessage(data: CreateMessage) {
    try {
        console.log(data)
        const message = await client.chatMessage.create({
            data: data,
        })
        return message;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getMessage(where: MessageWhereUnique) {
    try {
        const message = await client.chatMessage.findUniqueOrThrow({
            where: where,
        })
        return message
    }catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

const messageRepository = {
    createMessage,
    getMessage
}
export default messageRepository