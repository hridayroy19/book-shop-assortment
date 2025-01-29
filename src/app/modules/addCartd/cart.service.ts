
import cart from './cart.model';
import { TCart } from './cartInterface';

const crateOrder = async (paylod: TCart) => {
  const result = await cart.create(paylod);
  return result;
};

// const getcartItem = async () => {
//   const result = await cart.find();
//   // console.log(result)
//   return result;
// };

const getcartItem = async (email:string) => {
  const result = await cart.find({ userEmail: email }); // Filter cart items by userEmail
  return result;
};

//deleted data in database
const deleteCart = async (id:string) => {
  const result = await cart.findByIdAndDelete(id);
  console.log(result , "find by id" )
  return result;
};


export const cartService = {
  crateOrder,
  getcartItem,
  deleteCart,
};
