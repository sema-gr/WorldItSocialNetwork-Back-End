import express from 'express';
import albumController from './albumController';

const router = express.Router();

router.post('/create', albumController.createAlbum)
router.delete('/:id', albumController.deleteAlbum)
router.put('/:id', albumController.editAlbum)
router.get('/', albumController.getAlbums)

export default router