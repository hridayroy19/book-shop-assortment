import { TBook } from './book.interfac';
import { Book } from './book.model';

const createBookIntoDB = async (book: TBook) => {
  const result = await Book.create(book);
  return result;
};

//get all book data in Database
const getAllBookDB = async () => {
  const result = await Book.find();
  return result;
};

//get Single book data in Database
const getSingleBookDB = async (id: string) => {
  const rsult = await Book.findById(id);
  return rsult;
};

//deleted data in database
const deleteBookDB = async (id: string) => {
  const rsult = await Book.findByIdAndDelete(id);
  return rsult;
};

//update data in database
const updateBookBD = async (id: string, data: TBook) => {
  const result = await Book.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const BookService = {
  createBookIntoDB,
  getAllBookDB,
  getSingleBookDB,
  deletBookDB: deleteBookDB,
  updateBookBD,
};
