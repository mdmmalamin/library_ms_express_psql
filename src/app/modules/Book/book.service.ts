import { TBook } from "./book.interface";

const createBookIntoDB = (payload: TBook) => {
  console.log(payload);
};

export const BookService = {
  createBookIntoDB,
};
