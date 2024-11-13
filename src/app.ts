import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

//? Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? Welcome Routes
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Health care management system server...",
  });
});

//? APIs v1 All Routes
// app.use("/api/v1", router);

// //! Global Error Handler
// app.use(globalErrorHandler);

// //? Not Found Handler
// app.use(notFoundHandler);

export default app;
