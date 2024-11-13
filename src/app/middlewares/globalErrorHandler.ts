import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../../shared";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req);

  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    status: httpStatus.NOT_FOUND,
    message: error?.message || "Something went wrong.",
    // error: error,
  });
};
