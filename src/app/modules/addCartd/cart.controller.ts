import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cartService } from "./cart.service";

const cartOrder = catchAsync(async (req, res) => {

    const result = await cartService.crateOrder(req.body)
    // console.log(result);


    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        status: true,
        message: "Order Create Successfull",
        data: result
    })
})

const cartOrderGet = catchAsync(async (req, res) => {
    const result = await cartService.getcartItem()
    // console.log(result);
    sendResponse(res, {
        statusCode: StatusCodes.ACCEPTED,
        status: true,
        message: "Cart Order get Successfull",
        data: result
    })
})



export const cartController = {
    cartOrder,
    cartOrderGet
}