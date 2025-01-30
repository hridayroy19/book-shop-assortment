/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBook } from './book.interfac';
import { Book } from './book.model';

const createBookIntoDB = async (book: TBook) => {
  const result = await Book.create(book);
  // console.log(result,"service");

  return result;
};

// Get all books with strict search
const getAllBookDB = async (
  searchTerm: string | null,
  category: string | null,
  priceFilter: string | null,
) => {
  try {
    const query: any = {};

    // Search filtering based on the searchTerm
    if (searchTerm) {
      query.$or = [
        { title: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    // Category filtering
    if (category) {
      query.category = category;
    }

    // Sorting by price based on priceFilter (ascending or descending)
    let sortQuery = {};
    if (priceFilter === 'asc') {
      sortQuery = { price: 1 }; // Low to High
    } else if (priceFilter === 'desc') {
      sortQuery = { price: -1 };
    }

    const result = await Book.find(query).sort(sortQuery);
    return result;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Error while fetching books');
  }
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
