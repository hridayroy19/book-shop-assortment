import { Request, Response } from 'express';
import { BookService } from './book.server';
import bookValidationSchema from './book.validator';


const createBook = async (req: Request, res: Response) => {
  try {
    //validation zood
    const { book: bookdata } = req.body;
    const zodparsData = bookValidationSchema.parse(bookdata);
    const rsult = await BookService.createBookIntoDB(zodparsData);
    res.status(200).json({
      success: true,
      message: 'Book data crated succesfully',
      data: rsult,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

//get all books
const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getAllBookDB();
    res.status(200).json({
      success: true,
      message: 'Book data get succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const result = await BookService.getSingleBookDB(bookId);
    res.status(200).json({
      success: true,
      message: 'Book data get succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

const deletBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BookService.deletBookDB(id);
    res.status(200).json({
      success: true,
      message: 'Book succesfully deleted',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const data = req.body;
    const result = await BookService.updateBookBD(bookId, data);
    res.status(200).json({
      success: true,
      message: 'Book Data succesfully Updated ',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

export const bookController = {
  createBook,
  getAllBook,
  getSingleBook,
  deletBook,
  updateBook,
};
