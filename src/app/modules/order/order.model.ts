import { model, Schema } from 'mongoose';

//Order Book Model
const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// export const OrderModel = model<TOrder>('order', orderSchema);

const order = model('order', orderSchema);
export default order;
