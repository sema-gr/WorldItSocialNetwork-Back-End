import express from 'express';
import albumController from './albumController';
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';

const router = express.Router();

router.get('/', albumController.getAlbums)
router.post('/create', authTokenMiddleware, albumController.createAlbum)
router.delete('/:id', albumController.deleteAlbum)
router.put('/:id', albumController.editAlbum)


export default router