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

const getAllBorrowBooksFromDB = async (): Promise<BorrowRecord[] | null> => {
  const result = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
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
    throw new Error("Already Returned.");
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

export const BorrowBookService = {
  createBorrowBookIntoDB,
  getAllBorrowBooksFromDB,
  returnBorrowBookIntoDB,
};
