import express from "express";
import { BorrowBookController } from "./borrowBook.controller";

const router = express.Router();

router.post("/borrow", BorrowBookController.createBorrowBook);

router.post("/return", BorrowBookController.returnBorrowBook);

router.get("/borrow", BorrowBookController.getAllBorrowBooks);

export const BorrowBookRoutes = router;
