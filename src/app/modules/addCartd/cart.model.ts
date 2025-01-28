import { model, Schema } from 'mongoose';

//Order Book Model
const cartSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: [true, 'Email is required'],
    },
    productId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    image: { type: String },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

// export const OrderModel = model<TOrder>('order', orderSchema);

const cart = model('cartOrder', cartSchema);
export default cart;
