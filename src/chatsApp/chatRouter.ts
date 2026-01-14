import express from "express";
import { chatController } from "./chatController";
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = express.Router();

router.post("/create", authTokenMiddleware, chatController.createChat);
router.get("/", chatController.getChats);
router.get("/:id", chatController.getChat);
router.delete("/:id", authTokenMiddleware, chatController.deleteChat);

export default router;
