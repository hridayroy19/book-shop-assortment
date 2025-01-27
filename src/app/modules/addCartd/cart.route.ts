import { Router } from "express";
import { cartController } from "./cart.controller";

const cartRouter = Router()

cartRouter.post("/create-cart", cartController.cartOrder)
// cartRouter.post("/login", r.login)

export default cartRouter;