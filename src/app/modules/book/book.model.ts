import { model, Schema } from 'mongoose';
import { TBook } from './book.interfac';

//Model Book
const bookSchema = new Schema<TBook>(
  {
    title: {
      type: String,
      require: [true, 'title is require'],
      trim: true,
    },
    author: {
      type: String,
      require: [true, 'Price is require'],
    },
    price: {
      type: Number,
      require: [true, 'Price is require'],
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: [
          'Fiction',
          'Science',
          'SelfDevelopment',
          'Poetry',
          'Religious',
        ],
        message: '{VALUE} is not valid',
      },
    },
    description: {
      trim: true,
      type: String,
      min: 0,
      required: [true, 'desctiption is require'],
    },
    quantity: {
      type: Number,
      require: [true, 'quantity is require'],
    },
    inStock: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
  },
);

//book model
export const Book = model<TBook>('book', bookSchema);
