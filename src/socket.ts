import { Server as HttpServer } from "http";
import { Server as SocketServer } from "socket.io";
import { AppClientEvents, AppServerEvents, AuthenticatedSocket, SocketData } from "./types/socket";
import { chatSocketController, setSocketServerInstance } from "./Chats/chat.socket.controller";
import { socketAuthMiddleware } from "./middlewares/socketAuthMiddleware";

export function initSocketServer(httpServer: HttpServer) {
	const ioServer = new SocketServer<AppClientEvents, AppServerEvents, {}, SocketData>(httpServer);

	setSocketServerInstance(ioServer);

	ioServer.use(socketAuthMiddleware);

	ioServer.on("connection", (socket: AuthenticatedSocket) => {
		chatSocketController.registerChat(socket);
	});
}