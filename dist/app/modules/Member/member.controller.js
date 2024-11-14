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
exports.MemberController = void 0;
const shared_1 = require("../../../shared");
const member_service_1 = require("./member.service");
const createMember = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.createMemberIntoDB(req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.CREATED,
        message: "Member created successfully",
        data: result,
    });
}));
const getAllMembers = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.getAllMembersFromDB();
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: result.length > 0 ? "Members retrieved successfully" : "No member found.",
        data: result,
    });
}));
const getMemberById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.getMemberByIdFromDB(memberId);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Member retrieved successfully",
        data: result,
    });
}));
const updateMemberById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.updateMemberByIdIntoDB(memberId, req.body);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Member updated successfully",
        data: result,
    });
}));
const deleteMemberById = (0, shared_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.deleteMemberByIdFromDB(memberId);
    (0, shared_1.apiResponse)(res, {
        success: true,
        statusCode: shared_1.httpStatus.OK,
        message: "Member successfully deleted",
        data: result,
    });
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById,
};
