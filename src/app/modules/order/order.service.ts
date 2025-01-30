
import { TCart } from './order.interface';
import order from './order.model';

const crateOrderIntoDb = async (paylod: TCart) => {
  const result = await order.create(paylod);
  // console.log(result);
  return result;
};

//get all revenue data
const getOrder = async () => {
  const data = await order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    { $project: { totalRevenue: 1, _id: 0 } },
  ]);
  return data;
};

const allOrder = async (email: string) => {
  const result = await order.find({ userEmail: email });
  return result;
};

const singleOrder = async (id: string) => {
  const result = await order.findById(id);
  return result;
};

const orderUpdate = async (id: string, paylod: TCart) => {
  const result = await order.findByIdAndUpdate(id, paylod, {
    new: true,
  });
  return result;
};

const deletOrder = async (id: string) => {
  const result = await order.findByIdAndDelete(id);
  return result;
};

export const OrderServer = {
  crateOrderIntoDb,
  getOrder,
  singleOrder,
  orderUpdate,
  deletOrder,
  allOrder,
};
