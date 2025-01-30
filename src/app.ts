/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { BookRouter } from './app/modules/book/book.router';
import orderRouter from './app/modules/order/order.router';
import authRouter from './app/modules/auth/auth.router';
import { StatusCodes } from 'http-status-codes';
import cartRouter from './app/modules/addCartd/cart.route';
// import paymentrouter from './app/modules/payments/payment.routes';
import userRouter from './app/modules/user/user.routes';
import paymentRouter from './app/modules/payments/paymentRouter';
// import paymentRouter from './app/modules/payments/paymentRouter';
// import paymentrouter from './app/modules/payments/payment.routes';

//perser
app.use(express.json());
app.use(cors({ credentials: true }));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
//book router
app.use('/api/products', BookRouter);
//order router
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api', paymentRouter);
// app.use('/api', paymentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server site is running');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.log('error from app.ts file', err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err });
});

export default app;
