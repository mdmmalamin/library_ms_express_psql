import { Request, Response } from "express";
import { apiResponse, catchAsync, httpStatus } from "../../../shared";
import { MemberService } from "./member.service";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDB(req.body);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembersFromDB();

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      result.length > 0 ? "Members retrieved successfully" : "No member found.",
    data: result,
  });
});

const getMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.getMemberByIdFromDB(memberId);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.updateMemberByIdIntoDB(memberId, req.body);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.deleteMemberByIdFromDB(memberId);

  apiResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member successfully deleted",
    data: result,
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
