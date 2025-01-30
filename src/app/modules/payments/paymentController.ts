// import { SSLCommerzPayment } from 'sslcommerz-lts';
// import { Request, Response } from 'express';
// import crypto from 'crypto';
// import cart from '../addCartd/cart.model';
// import Order from '../order/order.model';


// export const initiatePayment = async (req: Request, res: Response) => {
//   const tran_id = crypto.randomUUID();
//   const product = req.body;

//   try {
//     const productIds = product.products.map((item: { id: string }) => item.id);
//     const items = await cart.find({ _id: { $in: productIds } }).lean();

//     if (!items || items.length === 0) {
//       return res.status(400).json({ error: 'No items found in cart' });
//     }

//     const data = {
//       total_amount: product.totalPrice,
//       currency: 'BDT',
//       tran_id: tran_id,
//       success_url: `http://localhost:5000/api/payment/success/${tran_id}`,
//       fail_url: `http://localhost:5000/api/payment/fail/${tran_id}`,
//       cancel_url: 'http://localhost:3030/cancel',
//       ipn_url: 'http://localhost:3030/ipn',
//       shipping_method: 'Courier',
//       product_name: 'Products',
//       product_category: 'Various',
//       product_profile: 'general',
//       cus_name: 'HR',
//       cus_email: product.userEmail,
//       cus_add1: 'Dhaka',
//       cus_add2: 'Dhaka',
//       cus_city: 'Dhaka',
//       cus_state: 'Dhaka',
//       cus_postcode: '1000',
//       cus_country: 'Bangladesh',
//       cus_phone: '01711111111',
//       cus_fax: '01711111111',
//       ship_name: 'Customer Name',
//       ship_add1: 'Dhaka',
//       ship_add2: 'Dhaka',
//       ship_city: 'Dhaka',
//       ship_state: 'Dhaka',
//       ship_postcode: 1000,
//       ship_country: 'Bangladesh',
//     };

//     const sslcz = new SSLCommerzPayment(
//       'hr6799e6efb7586',
//       'hr6799e6efb7586@ssl',
//       false,
//     );

//     const apiResponse = await sslcz.init(data);

//     if (!apiResponse || !apiResponse.GatewayPageURL) {
//       return res.status(400).json({ error: 'Failed to initialize payment', details: apiResponse });
//     }

//     const finalOrder = {
//       items: items,
//       paidStatus: false,
//       transaction: tran_id,
//       totalAmount: product.totalPrice,
//       userEmail: product.userEmail,
//     };

//     const createdOrder = await Order.create(finalOrder);
//     console.log('Order Saved:', createdOrder);

//     res.json({ url: apiResponse.GatewayPageURL });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error', details: error.message });
//   }
// };

// // export const paymentSuccess = async (req: Request, res: Response) => {
// //   try {
// //     const order = await Order.findOne({ transaction: req.params.tranId });

// //     if (!order) {
// //       return res.status(404).json({ error: 'Order not found' });
// //     }

// //     if (order.paidStatus) {
// //       return res.status(400).json({ error: 'Order already paid' });
// //     }

// //     const result = await Order.updateOne(
// //       { transaction: req.params.tranId },
// //       { $set: { paidStatus: true } },
// //     );

// //     if (result.modifiedCount > 0) {
// //       await cart.deleteMany({
// //         _id: { $in: order.items.map((item:any) => item._id) },
// //       });
// //       return res.redirect(
// //         `http://localhost:5173/payment/success/${req.params.tranId}`,
// //       );
// //     } else {
// //       return res.status(400).json({ error: 'Payment update failed' });
// //     }
// //   } catch (error: any) {
// //     res.status(500).json({ error: 'Internal Server Error', details: error.message });
// //   }
// // };

// // export const paymentFail = async (req: Request, res: Response) => {
// //   try {
// //     const result = await Order.deleteOne({ transaction: req.params.tranId });

// //     if (result.deletedCount > 0) {
// //       return res.redirect(
// //         `http://localhost:5173/payment/fail/${req.params.tranId}`,
// //       );
// //     } else {
// //       return res.status(400).json({ error: 'Order not found' });
// //     }
// //   } catch (error: any) {
// //     res.status(500).json({ error: 'Internal Server Error', details: error.message });
// //   }
// // };
