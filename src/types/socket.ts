import { Socket } from "socket.io"
import { IChatClientEvents, IChatServerEvents } from "../Chats/chat.type"
import { IMessageClientEvents, IMessageServerEvents } from "../Messages/message.type"
import { IFriendshipClientEvents, IFriendshipServerEvents } from "../friendshipApp/types"

export type AppServerEvents = IMessageServerEvents & IChatServerEvents & IFriendshipServerEvents
export type AppClientEvents = IMessageClientEvents & IChatClientEvents & IFriendshipClientEvents

export type AuthenticatedSocket = Socket<AppClientEvents, AppServerEvents, {}, SocketData>

export interface SocketData {
    userId: number
}