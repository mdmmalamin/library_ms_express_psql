import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { globalErrorHandler, notFoundHandler } from "./app/middlewares";
import router from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

//? Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? Welcome Routes
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome To Library Management System Server...",
  });
});

//? APIs All Routes
app.use("/api", router);

//! Global Error Handler
app.use(globalErrorHandler);

//? Not Found Handler
app.use(notFoundHandler);

export default app;
