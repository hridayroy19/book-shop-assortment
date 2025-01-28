import { model, Schema } from 'mongoose';
import { TBook } from './book.interfac';

//Model Book
const bookSchema = new Schema<TBook>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      unique: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minLength: [10, 'Description must be at least 10 characters'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative number'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      min: [0, 'Rating must be a number between 0 and 5'],
      max: [5, 'Rating must be a number between 0 and 5'],
      default: 0,
    },
    discount: {
      type: Number,
      min: [0, 'Discount must be a positive number'],
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
//book model
export const Book = model<TBook>('book', bookSchema);
