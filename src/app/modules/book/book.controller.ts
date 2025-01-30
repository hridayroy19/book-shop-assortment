import { Request, Response } from 'express';
import { BookService } from './book.server';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
// import bookValidationSchema from './book.validator';

const createBook = async (req: Request, res: Response) => {
  try {
    //  console.log(req.body);

    const rsult = await BookService.createBookIntoDB(req.body);
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

const getAllBook = catchAsync(async (req, res) => {
  const { searchTerm, category, priceFilter } = req.query;

  // Pass the parameters to the service method
  const result = await BookService.getAllBookDB(
    searchTerm as string | null,
    category as string | null,
    priceFilter as string | null,
  );

  // Check if no matching books found
  if (result?.length === 0) {
    res.status(404).json({
      message: `No books found matching the criteria.`,
      status: false,
    });
    return;
  }

  sendResponse(res, {
    statusCode: StatusCodes.ACCEPTED,
    status: true,
    message: 'Cart deleted Successfull',
    data: result,
  });
});

// single book get by id
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await BookService.getSingleBookDB(productId);
    res.status(200).json({
      status: true,
      message: 'Book get successfully',
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
      status: true,
      message: 'Book updated successfully ',
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
