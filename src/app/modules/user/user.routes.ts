import { Router } from 'express';
import { userController } from './user.Controller';

const userRouter = Router();

userRouter.get('/user-get', userController.userGet);

export default userRouter;
