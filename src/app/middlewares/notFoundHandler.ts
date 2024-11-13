import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../../shared";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req);

  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    status: httpStatus.NOT_FOUND,
    message: "API NOT FOUND!",
    // error: {
    //   path: req.originalUrl,
    //   message: "Your requested path is not valid!",
    // },
  });
};
