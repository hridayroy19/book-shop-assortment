import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { cartService } from './cart.service';

const cartOrder = catchAsync(async (req, res) => {
  const result = await cartService.crateOrder(req.body);
  // console.log(result);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    status: true,
    message: 'Order Create Successfull',
    data: result,
  });
});

// const cartOrderGet = catchAsync(async (req, res) => {
//   // const email = req.query.email;
//   // if(!email){
//   //     throw new Error()
//   // }
//   const result = await cartService.getcartItem();
//   // console.log(result);
//   sendResponse(res, {
//     statusCode: StatusCodes.ACCEPTED,
//     status: true,
//     message: 'Cart Order get Successfull',
//     data: result,
//   });
// });
const cartOrderGet = catchAsync(async (req, res) => {
  const email = req.query.email;

  // Ensure email is a string
  if (typeof email !== 'string' || !email) {
    throw new Error('Email is required and must be a valid string');
  }

  const result = await cartService.getcartItem(email); // Pass the email as a string

  sendResponse(res, {
    statusCode: StatusCodes.ACCEPTED,
    status: true,
    message: 'Cart Order get Successful',
    data: result,
  });
});

const deletCart = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await cartService.deleteCart(id);
  sendResponse(res, {
    statusCode: StatusCodes.ACCEPTED,
    status: true,
    message: 'Cart deleted Successfull',
    data: result,
  });
});

export const cartController = {
  cartOrder,
  cartOrderGet,
  deletCart,
};
