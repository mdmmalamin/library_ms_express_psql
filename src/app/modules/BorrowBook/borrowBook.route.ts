import express from "express";
import { BorrowBookController } from "./borrowBook.controller";

const router = express.Router();

router.post("/borrow", BorrowBookController.createBorrowBook);

export const BorrowBookRoutes = router;
