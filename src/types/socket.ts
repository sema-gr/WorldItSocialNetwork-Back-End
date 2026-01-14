import { Socket } from "socket.io";
import { IChatClientEvents, IChatServerEvents } from "../chatsApp/types";
import {
	IFriendshipClientEvents,
	IFriendshipServerEvents,
} from "../friendshipApp/types";
import {
	IMessageClientEvents,
	IMessageServerEvents,
} from "../messagesApp/types";

export type AppServerEvents = IMessageServerEvents &
	IChatServerEvents &
	IFriendshipServerEvents;
export type AppClientEvents = IMessageClientEvents &
	IChatClientEvents &
	IFriendshipClientEvents;

export type AuthenticatedSocket = Socket<
	AppClientEvents,
	AppServerEvents,
	{},
	SocketData
>;

export interface SocketData {
	userId: number;
}
