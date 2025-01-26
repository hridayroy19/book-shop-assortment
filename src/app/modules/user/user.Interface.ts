import { USER_ROLE } from "./user.constants"

export interface Iuser {
    name: string,
    email: string,
    password: string,
    role: 'user' | 'admin',
    photo?: string | null,
    userStatus: 'active' | 'inactive'
} 

export type TUserRole = keyof typeof USER_ROLE