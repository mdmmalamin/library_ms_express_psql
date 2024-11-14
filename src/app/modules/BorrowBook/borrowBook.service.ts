import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared";

const createBorrowBookIntoDB = async (
  payload: TBorrowBook
): Promise<BorrowRecord> => {
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
  });

  return result;
};

export const BorrowBookService = {
  createBorrowBookIntoDB,
};
