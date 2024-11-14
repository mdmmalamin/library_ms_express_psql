import { Member } from "@prisma/client";
import { prisma } from "../../../shared";
import { TMember } from "./member.interface";

const createMemberIntoDB = async (payload: TMember): Promise<Member> => {
  const member = await prisma.member.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (member) {
    throw new Error("This email already exist in the database.");
  }

  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

const getAllMembersFromDB = async (): Promise<Member[]> => {
  const result = await prisma.member.findMany();

  return result;
};

const getMemberByIdFromDB = async (
  memberId: string
): Promise<Member | null> => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMemberByIdIntoDB = async (
  memberId: string,
  payload: Partial<Member>
): Promise<Member> => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  if (payload.email) {
    const member = await prisma.member.findUnique({
      where: {
        email: payload?.email,
      },
    });

    if (memberId !== member?.memberId) {
      throw new Error("This email already exist in the database.");
    }
  }

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });

  return result;
};

const deleteMemberByIdFromDB = async (memberId: string): Promise<undefined> => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  await prisma.member.delete({
    where: {
      memberId,
    },
  });
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberByIdIntoDB,
  deleteMemberByIdFromDB,
};
