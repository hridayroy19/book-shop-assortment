import { Book } from '../book/book.model';
import { TOrder } from './order.interface';
import order from './order.model';

const crateOrder = async (paylod: TOrder) => {

  const { product, quantity } = paylod;
  //fine id book
  const bookOrder = await Book.findById(product);
  // console.log(bookOrder, ' id resive');
  if (!bookOrder || bookOrder.quantity < quantity) {
    throw new Error('Book Not Found or Insufficient Stock');
  }

  bookOrder.quantity -= quantity;
  if (bookOrder.quantity === 0) {
    bookOrder.inStock = false;
  }
  await bookOrder.save();

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

const allOrder = async () => {
  const result = await order.find();
  return result;
};

const singleOrder = async (id: string) => {
  const result = await order.findById(id);
  return result;
};

const orderUpdate = async (id: string, paylod: TOrder) => {
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
  crateOrder,
  getOrder,
  singleOrder,
  orderUpdate,
  deletOrder,
  allOrder,
};
