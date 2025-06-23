import { AuthenticatedSocket } from "../types/socket";
import { chatController } from "./chat.controller";
import { chatService } from "./chat.service";
import { IChatUpdatePayload, IJoinChatCallback, IJoinChatPayload, ILeaveChatPayload } from "./chat.type";

function leaveChat(socket: AuthenticatedSocket, data: ILeaveChatPayload) {
    const chatRoomName = `chat_${data.chatId}`
    socket.leave(chatRoomName)
}

async function joinChat(socket: AuthenticatedSocket, data: IJoinChatPayload, callback: IJoinChatCallback) {
    const chatRoomName = `chat_${data.chatId}`
    socket.join(chatRoomName)
    const result = await chatService.joinChat(data.chatId)
    if (result.status == "success") {
        if (typeof callback == "function") {
            callback({ status: "success", data: result.data })
        }
    }
}

function updateChat(socket: AuthenticatedSocket, data: IChatUpdatePayload) { }

function registerChat(socket: AuthenticatedSocket) {
    socket.on("joinChat", (data, callback) => {
        joinChat(socket, data, callback);
    });
    socket.on("leaveChat", (data) => {
        leaveChat(socket, data);
    });
}

export const chatSocketController = {
    registerChat,
    updateChat,
    joinChat,
    leaveChat
}