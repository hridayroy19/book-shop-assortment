import { z } from 'zod';

// Define the Zod schema
export const bookValidationSchema = z.object({
  title: z.string().min(1, 'Title is required.').trim(),
  author: z.string().min(1, 'Author is required.').trim(),
  price: z.number().positive('Price must be a positive number.'),
  image: z.string().optional(),
  category: z.string().min(1, 'Category is required.'),
  description: z.string().min(1, 'Description is required.').trim(),
  discount: z.number().optional(),
  rating:z.number().optional(),
  quantity: z.number().nonnegative('Quantity must be a non-negative number.'),
  inStock: z.boolean().default(true),  
});

export default bookValidationSchema;
