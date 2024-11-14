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
exports.BorrowBookController = void 0;
const shared_1 = require("../../../shared");
const borrowBook_service_1 = require("./borrowBook.service");
const createBorrowBook = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookService.createBorrowBookIntoDB(req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Book borrowed successfully",
        data: result,
    });
}));
const returnBorrowBook = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookService.returnBorrowBookIntoDB(req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Book returned successfully",
        data: result,
    });
}));
const getOverDueBorrow = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookService.getOverDueBorrowFromDB();
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
        data: result,
    });
}));
const getAllBorrowBooks = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookService.getAllBorrowBooksFromDB();
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: result.length > 0
            ? "All book borrowed retrieved successfully"
            : "No book borrowed",
        data: result,
    });
}));
exports.BorrowBookController = {
    createBorrowBook,
    returnBorrowBook,
    getOverDueBorrow,
    getAllBorrowBooks,
};
