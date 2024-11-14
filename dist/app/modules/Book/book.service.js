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
exports.BookService = void 0;
const shared_1 = require("../../../shared");
const createBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.book.create({
        data: payload,
    });
    return result;
});
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.book.findMany();
    return result;
});
const getBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    return result;
});
const updateBookByIdIntoDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield shared_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield shared_1.prisma.book.update({
        where: {
            bookId,
        },
        data: payload,
    });
    return result;
});
const deleteBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield shared_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    yield shared_1.prisma.book.delete({
        where: {
            bookId,
        },
    });
});
exports.BookService = {
    createBookIntoDB,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBookByIdIntoDB,
    deleteBookByIdFromDB,
};
