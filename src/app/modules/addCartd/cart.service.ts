
import cart from "./cart.model";
import { TCart } from "./cartInterface";

const crateOrder = async (paylod:TCart) => {
  const result = await cart.create(paylod);
    return result;
  };

//get all book data in Database
const getcartItem = async () => {
  const result = await cart.find();
  console.log(result);
  
  return result;
};


  export const cartService = {
    crateOrder,
    getcartItem
  }