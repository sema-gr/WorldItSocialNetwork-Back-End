import express from 'express';
import albumController from './albumController';

const router = express.Router();

router.get('/', albumController.getAlbums)
router.post('/create', albumController.createAlbum)
router.delete('/:id', albumController.deleteAlbum)
router.put('/:id', albumController.editAlbum)


export default router