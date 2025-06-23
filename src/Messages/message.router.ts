import express from 'express';
import { messageController } from './message.controller';

const router = express.Router();

router.post('/create', messageController.createMessage)
router.get('/:id', messageController.getMessage)


export default router