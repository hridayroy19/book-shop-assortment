import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

orderRouter.post('/checkout', orderController.crateOrder);
orderRouter.get('/orders/revenue', orderController.getOrder);

orderRouter.get('/:orderId', orderController.singleGetOrder);
orderRouter.put('/:orderId', orderController.updateOrder);
orderRouter.delete('/:orderId', orderController.deletGetOrder);

export default orderRouter;
