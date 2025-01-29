// import { model, Schema } from "mongoose";


// const orderSchema = new Schema(
//   {
//     userEmail: {
//       type: String,
//       required: [true, 'Email is required'],
//     },
//     productId: {
//       type: String,
//       required: true,
//     },
//     title: {
//       type: String,
//     },
//     image: { type: String },
//     price: {
//       type: Number,
//     },
//     paidStatus:{ type:Boolean},
//     totalAmount:{type:String},
//     transaction:{type:String}
//   },
//   {
//     timestamps: true,
//   },
// );


import { Schema, Document, model } from "mongoose";

interface IOrderItem {
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface IOrder extends Document {
    userEmail: string;
    items: IOrderItem[];
    paidStatus: boolean;
    transaction: string;
    totalAmount: number;
}

const orderSchema: Schema<IOrder> = new Schema(
    {
        userEmail: { type: String, required: true },
        items: [
            {
                productId: { type: String, required: true },
                title: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number,  },
                image: { type: String, required: true }
            }
        ],
        paidStatus: { type: Boolean, default: false },
        transaction: { type: String, required: true },
        totalAmount: { type: Number, required: true },

    },
    { timestamps: true }
);

// const Order = mongoose.model<IOrder>("Order", orderSchema);

// export default Order;





const Order = model('Order', orderSchema);
export default Order;