import { Request, Response } from 'express';
import { BookService } from './book.server';
import bookValidationSchema from './book.validator';


const createBook = async (req: Request, res: Response) => {
  try {
    const { book: bookdata } = req.body;
        //validation zood shecma
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
 // single book get by id
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const productId  = req.params.productId 
    const result = await BookService.getSingleBookDB(productId);
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
 //book deleted by id 
const deletBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await BookService.deletBookDB(productId);
    res.status(200).json({
      success: true,
      message: 'Book succesfully deleted',
       result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'somthing went wrong',
      error,
    });
  }
};

//book update by id
const updateBook = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await BookService.updateBookBD(productId, data);
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
