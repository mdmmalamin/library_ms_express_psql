import { Request, Response } from "express";
import { BookService } from "./book.service";
import { apiResponse, catchAsync, httpStatus } from "../../../shared";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDB();

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getBookByIdFromDB(bookId);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.updateBookByIdIntoDB(bookId);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.deleteBookByIdFromDB(bookId);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book successfully deleted",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
