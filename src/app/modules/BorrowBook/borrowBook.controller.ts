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

export const BorrowBookController = {
  createBorrowBook,
};
