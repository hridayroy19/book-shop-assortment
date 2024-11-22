import express from 'express';
import { bookController } from './book.controller';

const router = express.Router();

//call controller
router.post('/', bookController.createBook);
router.get('/', bookController.getAllBook);
router.get('/:bookId', bookController.getSingleBook);
router.delete('/:id', bookController.deletBook);
router.put('/:bookId', bookController.updateBook);

export const BookRouter = router;
