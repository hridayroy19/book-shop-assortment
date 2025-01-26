
import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt';
import { Iuser } from "../user/user.Interface"
import { User } from "../user/user.Model"
import { ILoginUser } from "./auth.Interface"


const register = async (payload: Iuser) => {
    const result = await User.create(payload)
    return result
}

const login = async (payload: ILoginUser) => {

    const user = await User.findOne({ email: payload?.email })

    if (!user) {
        throw new Error("User Not Found")
    }

    const userStatus = user.userStatus;

    if (userStatus === "inactive") {
        throw new Error("User All Ready Block")
    }

    const ispassword = await bcrypt.compare(payload?.password, user?.password)

    if (!ispassword) {
        throw new Error("please Provide a correct password")
    }

    // token generet
    const token = jwt.sign({ email: user.email, role: user?.role }, "secrect", { expiresIn: "30d" })
    return { user, token }
}


export const authService = {
    register,
    login
}