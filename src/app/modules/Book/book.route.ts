import express from "express";
import { BookController } from "./book.controller";
// import { validateRequest } from "../../middlewares";
// import { BookValidation } from "./book.validation";

const router = express.Router();

router.post(
  "/",
  // validateRequest(BookValidation.createSchema),
  BookController.createBook
);

router.get("/", BookController.getAllBooks);

router.get("/:bookId", BookController.getBookById);

router.put("/:bookId", BookController.updateBookById);

router.delete("/:bookId", BookController.deleteBookById);

export const BookRoutes = router;
