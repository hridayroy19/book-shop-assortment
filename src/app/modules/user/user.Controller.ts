import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userService } from './User.Server';

const userGet = catchAsync(async (req, res) => {
  const result = await userService.getUser();
  const filteredResult = result.filter((user) => user.role === 'user');
  sendResponse(res, {
    statusCode: StatusCodes.ACCEPTED,
    status: true,
    message: 'Cart Order get Successful',
    data: filteredResult,
  });
});

export const userController = {
  userGet,
};
