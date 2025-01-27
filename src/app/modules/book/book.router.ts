import express from 'express';
import { bookController } from './book.controller';
// import { auth } from '../../middlewares/auth';

const router = express.Router();

//call controller
router.post('/create-book', bookController.createBook);
router.get('/get-book',bookController.getAllBook);
router.get('/:productId', bookController.getSingleBook);
router.delete('/:productId', bookController.deletBook);
router.put('/:productId', bookController.updateBook);

export const BookRouter = router;
