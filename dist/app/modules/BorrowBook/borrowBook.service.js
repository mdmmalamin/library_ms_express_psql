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
exports.BorrowBookService = void 0;
const shared_1 = require("../../../shared");
const createBorrowBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield shared_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId: payload.bookId,
        },
    });
    yield shared_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: payload.memberId,
        },
    });
    const result = yield shared_1.prisma.borrowRecord.create({
        data: payload,
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
            returnDate: false,
        },
    });
    return result;
});
const returnBorrowBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const borrow = yield shared_1.prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: payload.borrowId,
        },
    });
    if (borrow.returnDate !== null) {
        throw new Error("Book already returned.");
    }
    yield shared_1.prisma.borrowRecord.update({
        where: {
            borrowId: payload.borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
});
const getOverDueBorrowFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shared_1.prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
            },
        },
        include: {
            book: {
                select: {
                    title: true,
                },
            },
            member: {
                select: {
                    name: true,
                },
            },
        },
    });
    const overdueBorrows = results.map((record) => {
        const overdueDays = Math.floor((Date.now() - new Date(record.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24) -
            14);
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    // const result = await prisma.$queryRaw`SELECT * FROM "borrowRecords"
    //   WHERE "returnDate"
    //     IS NULL
    //   AND
    //     CURRENT_DATE > ("borrowDate"::TIMESTAMP::DATE + INTERVAL '14 days')`;
    return overdueBorrows;
});
const getAllBorrowBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.borrowRecord.findMany({
        include: {
            book: true,
            member: true,
        },
    });
    return result;
});
exports.BorrowBookService = {
    createBorrowBookIntoDB,
    returnBorrowBookIntoDB,
    getOverDueBorrowFromDB,
    getAllBorrowBooksFromDB,
};
