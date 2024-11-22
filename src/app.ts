import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { BookRouter } from './app/modules/book/book.router';
import orderRouter from './app/modules/order/order.router';

//perser
app.use(express.json());
app.use(cors());

// app.use("/api/v1",orderRouter)
app.use('/api/products', BookRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server site is running');
});

export default app;