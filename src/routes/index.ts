import { Router } from 'express';
const router = Router();

import {createPhoto, getPhotos} from '../controllers/photo.controller'

router.route('/photos')
    .post(createPhoto)
    .get(getPhotos)

export default router;
