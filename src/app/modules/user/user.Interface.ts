
export interface Iuser {
    name: string
    email: string
    passwrod: string
    role: 'user' | 'admin'
    photo?: string | null
    userStatus: 'active' | 'inactive'
} 