import { Book } from "@prisma/client";
import { prisma } from "../../../shared";
import { TBook } from "./book.interface";

const createBookIntoDB = async (payload: TBook): Promise<Book> => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

const getBookByIdFromDB = async (bookId: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBookByIdIntoDB = async (
  bookId: string,
  payload: Partial<Book>
): Promise<Book> => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });

  return result;
};

const deleteBookByIdFromDB = async (bookId: string) => {
  console.log(bookId);
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookByIdIntoDB,
  deleteBookByIdFromDB,
};
