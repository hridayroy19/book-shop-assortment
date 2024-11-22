import { model, Schema } from 'mongoose';
// import validator from "validator";

//Order Book Model
const orderSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // validate: {
    //     validator: (value: string) => validator.isEmail(value),
    //     message: ' {VALUE}  is not a valid email address',
    // },
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'book',
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
});

// export const OrderModel = model<TOrder>('order', orderSchema);

const order = model('order', orderSchema);
export default order;
