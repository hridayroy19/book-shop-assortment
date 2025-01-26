
export interface Iuser {
    name: string,
    email: string,
    password: string,
    role: 'user' | 'admin',
    photo?: string | null,
    userStatus: 'active' | 'inactive'
} 