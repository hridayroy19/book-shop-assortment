/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import userRouter from './app/modules/user/user.routes';
import authRouter from './app/modules/auth/auth.router';
import { ProjcetRouter } from './app/modules/book/projcet.router';

//perser
app.use(express.json());
app.use(cors({ credentials: true }));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/projcet', ProjcetRouter);


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
