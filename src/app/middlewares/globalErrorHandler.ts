import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../../shared";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req);

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: error?.message || "Something went wrong.",
    // error: error,
  });
};
