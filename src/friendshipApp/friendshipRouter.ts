import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";
import friendshipController from "./friendshipController";
import express from 'express';

const router = express.Router();

router.post('/create', authTokenMiddleware, friendshipController.createFriendship)



export default router