import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "../user/user.Validation";


const authRouter = Router()

authRouter.post("/register",validateRequest(UserValidation.userValidationSchema),authController.register)
authRouter.post("/login")

export default authRouter;