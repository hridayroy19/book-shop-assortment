// export type TOrder = {
//   userEmail: string; // Email of the user placing the order
//   products?: Array<{
//     id: string; // Unique identifier for the product
//     title: string; // Title or name of the product
//     quantity: number; // Quantity of the product
//   }>;
//   totalPrice: string; // Total price of the order (e.g., "26.48")
// };

export type TCart = {
  productId: string;
  title: string;
  price:string;
  image: string;
  userEmail:string;
  paidStatus:boolean;
  totalAmount:string
  transaction:string
  createdAt?: Date;
  updatedAt?: Date;
};
