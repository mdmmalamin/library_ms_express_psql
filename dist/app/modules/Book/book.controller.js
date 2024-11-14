"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const shared_1 = require("../../../shared");
const createBook = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBookIntoDB(req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.CREATED,
        message: "Book created successfully",
        data: result,
    });
}));
const getAllBooks = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBooksFromDB();
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: result.length > 0 ? "Books retrieved successfully" : "No book available.",
        data: result,
    });
}));
const getBookById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.getBookByIdFromDB(bookId);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Book retrieved successfully",
        data: result,
    });
}));
const updateBookById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.updateBookByIdIntoDB(bookId, req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBookById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.deleteBookByIdFromDB(bookId);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Book successfully deleted",
        data: result,
    });
}));
exports.BookController = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById,
};
