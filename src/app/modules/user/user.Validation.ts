import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string({
    required_error: 'Name must be provided and must be a string',
  }),
  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email({ message: 'Invalid email address' }),

  password: z.string({
    required_error: 'Password is required for your safety',
  }),

  photo: z.string().optional().default(''),

  userStatus: z
    .string()
    .default('active')
    .refine((val) => ['active', 'inactive'].includes(val), {
      message: "userStatus must be either 'active' or 'inactive'",
    }),

  role: z
    .string()
    .optional()
    .default('user')
    .refine((val) => ['user', 'admin'].includes(val), {
      message: "Role must be either 'user' or 'admin'",
    }),
});

export const UserValidation = {
  userValidationSchema,
};
