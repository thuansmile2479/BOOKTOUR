import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'WE17301',
    format: 'png',
  },
});

const upload = multer({ storage: storage });

export const uploadMiddleware = upload.array('images', 10);
