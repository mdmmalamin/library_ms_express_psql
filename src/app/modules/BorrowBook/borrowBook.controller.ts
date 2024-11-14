import { Request, Response } from "express";
import { apiResponse, catchAsync, httpStatus } from "../../../shared";
import { BorrowBookService } from "./borrowBook.service";

const createBorrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowBookService.createBorrowBookIntoDB(req.body);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

const returnBorrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowBookService.returnBorrowBookIntoDB(req.body);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
    data: result,
  });
});

const getOverDueBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowBookService.getOverDueBorrowFromDB();

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result,
  });
});

const getAllBorrowBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowBookService.getAllBorrowBooksFromDB();

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      result.length > 0
        ? "All book borrowed retrieved successfully"
        : "No book borrowed",
    data: result,
  });
});

export const BorrowBookController = {
  createBorrowBook,
  returnBorrowBook,
  getOverDueBorrow,

  getAllBorrowBooks,
};
