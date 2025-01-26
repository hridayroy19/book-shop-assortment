import { Iuser } from "../user/user.Interface"
import { User } from "../user/user.Model"


const register = async (payload: Iuser) => {
    const result = await User.create(payload)
    return result
}


export const authService = {
    register
}