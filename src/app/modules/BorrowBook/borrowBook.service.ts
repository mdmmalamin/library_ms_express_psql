import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared";

const createBorrowBookIntoDB = async (
  payload: TBorrowBook
): Promise<Partial<BorrowRecord>> => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload.bookId,
    },
  });

  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload.memberId,
    },
  });

  const result = await prisma.borrowRecord.create({
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
};

const returnBorrowBookIntoDB = async (payload: { borrowId: string }) => {
  const borrow = await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: payload.borrowId,
    },
  });

  if (borrow.returnDate !== null) {
    throw new Error("Book already returned.");
  }
  await prisma.borrowRecord.update({
    where: {
      borrowId: payload.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
};

const getOverDueBorrowFromDB = async () => {
  const results = await prisma.borrowRecord.findMany({
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
    const overdueDays = Math.floor(
      (Date.now() - new Date(record.borrowDate).getTime()) /
        (1000 * 60 * 60 * 24) -
        14
    );

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
};

const getAllBorrowBooksFromDB = async (): Promise<BorrowRecord[] | null> => {
  const result = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });

  return result;
};

export const BorrowBookService = {
  createBorrowBookIntoDB,
  returnBorrowBookIntoDB,
  getOverDueBorrowFromDB,

  getAllBorrowBooksFromDB,
};
