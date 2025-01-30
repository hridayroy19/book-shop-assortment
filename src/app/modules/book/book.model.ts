import { model, Schema } from 'mongoose';
import { TBook } from './book.interfac';

//Model Book
const bookSchema = new Schema<TBook>(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 4,
    },
    discount: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  },
);
//book model
export const Book = model<TBook>('book', bookSchema);
