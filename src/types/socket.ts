import { Socket } from "socket.io"
import { IChatClientEvents, IChatServerEvents } from "../Chats/chat.type"
import { IMessageClientEvents, IMessageServerEvents } from "../Messages/message.type"

export type AppServerEvents = IMessageServerEvents & IChatServerEvents
export type AppClientEvents = IMessageClientEvents & IChatClientEvents

export type AuthenticatedSocket = Socket<AppClientEvents, AppServerEvents, {}, SocketData>

export interface SocketData {
    userId: number
}