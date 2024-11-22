import { z } from 'zod';

// Define the Zod schema
export const bookValidationSchema = z.object({
  id: z.string().min(1, 'ID is required.'),
  title: z.string().min(1, 'Title is required.').trim(),
  author: z.string().min(1, 'Author is required.').trim(),
  price: z.number().positive('Price must be a positive number.'),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      message:
        'Category must be one of the following: Fiction, Science, SelfDevelopment, Poetry, Religious.',
    },
  ),
  description: z.string().min(1, 'Description is required.').trim(),
  quantity: z.number().nonnegative('Quantity must be a non-negative number.'),
  inStock: z.boolean().default(true),
});

export default bookValidationSchema;
