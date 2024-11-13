import { Response } from "express";

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null | undefined;
};

export const apiResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    status: data.statusCode,
    message: data.message,
    data: data.data || null || undefined,
  });
};
