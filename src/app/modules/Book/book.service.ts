import { TBook } from "./book.interface";

const createBookIntoDB = (payload: TBook) => {
  console.log(payload);
};

const getAllBooksFromDB = () => {
  console.log("getAllBooksFromDB");
};

const getBookByIdFromDB = (bookId: string) => {
  console.log(bookId);
};

const updateBookByIdIntoDB = (bookId: string) => {
  console.log(bookId);
};

const deleteBookByIdFromDB = (bookId: string) => {
  console.log(bookId);
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookByIdIntoDB,
  deleteBookByIdFromDB,
};
