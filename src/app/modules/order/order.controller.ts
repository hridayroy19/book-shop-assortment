import { Request, Response } from 'express';
import { OrderServer } from './order.service';

const crateOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await OrderServer.crateOrder(body);
    res.json({
      success: true,
      message: ' Order crated successfully',
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

const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServer.getOrder();
    res.json({
      success: true,
      message: ' get data successfully',
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
    const id = req.params.id;
    const body = req.body;
    const result = await OrderServer.orderUpdate(id, body);
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
    const id = req.params.id;
    const body = req.body;
    const result = await OrderServer.deletOrder(id, body);
    res.json({
      success: true,
      message: ' Order deleted successfully',
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

export const orderController = {
  crateOrder,
  getOrder,
  singleGetOrder,
  updateOrder,
  deletGetOrder,
};
