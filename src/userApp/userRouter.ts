import express from 'express';
import userController from './userController';
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';

const router = express.Router();

router.post('/reg', userController.registerUser)
router.post('/log', userController.loginUser)
router.post('/sendCode', userController.sendCode)
router.get('/me', authTokenMiddleware, userController.getUserById)
router.get("/all", userController.getUsers)
router.put("/:id", userController.updateUserById)
router.get('/:id', userController.getUserByReqId)


export default router