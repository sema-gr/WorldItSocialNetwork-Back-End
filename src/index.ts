import express, { Express } from "express";
import cors from "cors";
import userRouter from "./userApp/userRouter";
import postRouter from "./postApp/postRouter";
import albumRouter from "./albumApp/albumRouter";
import chatsRouter from "./chatsApp/chatRouter";
import path from "path";
import friendshipRouter from "./friendshipApp/friendshipRouter";
import { createServer } from "http";
import { initSocketServer } from "./socket";
import messageRouter from "./messagesApp/messageRouter";

const app: Express = express();
const httpServer = createServer(app);
initSocketServer(httpServer);

const PORT = process.env.PORT || 3000;
export const API_BASE_URL =
	process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

app.use("/users", userRouter);

app.use("/posts", postRouter);

app.use("/albums", albumRouter);

app.use(
	"/uploads",
	express.static(path.join(__dirname, "..", "public", "uploads")),
);

app.use("/friendship", friendshipRouter);

app.use("/chats", chatsRouter);

app.use("/messages", messageRouter);

httpServer.listen(Number(PORT), () => {
	console.log(`Server is running on port ${PORT}`);
});
