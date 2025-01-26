import { z } from "zod";

const loginValidationSchema = z.object({
   
    password: z.string({required_error: "provid a password",}),
    email: z.string({ required_error: "Email must be provide",}).email()
})

export const AuthValidation = {
    loginValidationSchema
}