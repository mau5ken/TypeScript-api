import { Router } from 'express';
const router = Router();

import {createPhoto, getPhotos} from '../controllers/photo.controller'
import multer from '../libs/multer'

router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

export default router;
