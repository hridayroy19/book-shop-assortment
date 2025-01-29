 
import { Request, Response } from 'express';
import { OrderServer } from './order.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';



const crateOrder = catchAsync(async (req, res) => {
  const result = await OrderServer.crateOrderIntoDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    status: true,
    message: 'Order Create Successfull',
    data: result,
  });
});


const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServer.getOrder();
    res.json({
      status: true,
      message: ' Revenue calculated successfully',
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'somting went wrong',
      error,
    });
  }
};

const singleGetOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const result = await OrderServer.singleOrder(orderId);
    res.json({
      success: true,
      message: ' Single data get successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'somting went wrong',
      error,
    });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const body = req.body;
    const result = await OrderServer.orderUpdate(orderId, body);
    res.json({
      success: true,
      message: ' Order Update successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'somting went wrong',
      error,
    });
  }
};

const deletGetOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServer.deletOrder(orderId);
    res.json({
      success: true,
      message: ' Order deleted successfully',
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'somting went wrong',
      error,
    });
  }
};

export const orderController = {
  crateOrder,
  getOrder,
  singleGetOrder,
  updateOrder,
  deletGetOrder,
};
