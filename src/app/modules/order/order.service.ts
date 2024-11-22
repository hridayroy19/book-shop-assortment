import { TOrder } from './order.interface';
import order from './order.model';

const crateOrder = async (paylod: TOrder) => {
  const result = await order.create(paylod);
  return result;
};

const getOrder = async () => {
  const result = await order.find();
  return result;
};

const singleOrder = async (id: string) => {
  const result = await order.findById(id);
  return result;
};

const orderUpdate = async (id: string, paylod: Partial<TOrder>) => {
  const result = await order.findByIdAndUpdate(id, paylod);
  return result;
};

const deletOrder = async (id: string, data: TOrder) => {
  const result = await order.findByIdAndDelete(id, data);
  return result;
};

export const OrderServer = {
  crateOrder,
  getOrder,
  singleOrder,
  orderUpdate,
  deletOrder,
};
