import express from 'express';
import { initiatePayment, paymentFail, paymentSuccess,  } from './payment.routes';
import catchAsync from '../../utils/catchAsync';



const paymentRouter = express.Router();

// Payment initiation route
// paymentRouter.post('/payment',initiatePayment);
paymentRouter.post('/payment', catchAsync(initiatePayment));

// Payment success route
paymentRouter.post('/payment/success/:tranId', catchAsync(paymentSuccess));

// // Payment fail route
paymentRouter.post('/payment/fail/:tranId', catchAsync(paymentFail));

export default paymentRouter;
