import { User } from './../modules/user/user.Model';
import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from "../utils/catchAsync"



export const auth = (requireRole: string) => {
    return catchAsync(async (req, res, next) => {

        const token = req.headers.authorization;

        if (!token) {
            throw new Error("Your are not Authorized")
        }

        const decoded = jwt.verify(token, "secrect") as JwtPayload;

        const { email, role } = decoded

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error("Your are not found")
        }

        if (requireRole !== role) {
            throw new Error("Your are not authorized")
        }

        req.user = decoded as JwtPayload
        next()
    })
}