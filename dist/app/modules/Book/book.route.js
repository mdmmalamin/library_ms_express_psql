"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
// import { validateRequest } from "../../middlewares";
// import { BookValidation } from "./book.validation";
const router = express_1.default.Router();
router.post("/", 
// validateRequest(BookValidation.createSchema),
book_controller_1.BookController.createBook);
router.get("/", book_controller_1.BookController.getAllBooks);
router.get("/:bookId", book_controller_1.BookController.getBookById);
router.put("/:bookId", book_controller_1.BookController.updateBookById);
router.delete("/:bookId", book_controller_1.BookController.deleteBookById);
exports.BookRoutes = router;
