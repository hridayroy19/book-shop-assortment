import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.service";

const register = catchAsync(async (req, res) => {

    const result = await authService.register(req.body)

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        status: true,
        message: "User Create Successfull",
        data: result
    })
})

const login = catchAsync(async (req, res) => {

    const result = await authService.login(req.body)
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        status: true,
        message: "User Login Successfull",
        token:result.token,
        data: result
    })
})



export const authController = {
    register,
    login
}