import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";
import friendshipController from "./friendshipController";
import express from 'express';

const router = express.Router();
router.get('/all', friendshipController.getFriendship)
router.post('/create', authTokenMiddleware, friendshipController.createFriendship)
router.put('/acceptFriedship',authTokenMiddleware, friendshipController.getFriendship)


export default router