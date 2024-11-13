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

export const BookController = {
  createBook,
};
