import { User } from './../modules/user/user.Model';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync';
import { TUserRole } from '../modules/user/user.Interface';

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error('Your are not Authorized');
    }

    const decoded = jwt.verify(token, 'secrect') as JwtPayload;

    const { email, role } = decoded;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Your are not found');
    }

    const userStatus = user?.userStatus;

    if (userStatus === 'inactive') {
      throw new Error('This user is blocked ! !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error('You are not authorized');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};
