import { Router } from 'express';
import { cartController } from './cart.controller';

const cartRouter = Router();

cartRouter.post('/create-cart', cartController.cartOrder);
cartRouter.get('/caritem-get', cartController.cartOrderGet);
cartRouter.delete('/delete/:id', cartController.deletCart);

export default cartRouter;
