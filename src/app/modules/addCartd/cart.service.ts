
import cart from "./cart.model";
import { TCart } from "./cartInterface";

const crateOrder = async (paylod:TCart) => {
  const result = await cart.create(paylod);
    return result;
  };


  export const cartService = {
    crateOrder,
  }