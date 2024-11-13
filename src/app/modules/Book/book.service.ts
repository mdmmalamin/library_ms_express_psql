import { prisma } from "../../../shared";
import { TBook } from "./book.interface";

const createBookIntoDB = (payload: TBook) => {
  const result = prisma.book.create({
    data: payload,
  });

  return result;
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
