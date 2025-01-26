import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { BookRouter } from './app/modules/book/book.router';
import orderRouter from './app/modules/order/order.router';
import authRouter from './app/modules/auth/auth.router';

//perser
app.use(express.json());
app.use(cors());


app.use('/api/auth', authRouter);
//book router
app.use('/api/products', BookRouter);
//order router
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server site is running');
});

export default app;
