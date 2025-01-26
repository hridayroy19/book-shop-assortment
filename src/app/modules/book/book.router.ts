import express from 'express';
import { bookController } from './book.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

//call controller
router.post('/', bookController.createBook);
router.get('/', auth("admin"),bookController.getAllBook);
router.get('/:productId', bookController.getSingleBook);
router.delete('/:productId', bookController.deletBook);
router.put('/:productId', bookController.updateBook);

export const BookRouter = router;
