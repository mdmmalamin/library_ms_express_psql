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
exports.MemberService = void 0;
const shared_1 = require("../../../shared");
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield shared_1.prisma.member.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (member) {
        throw new Error("This email already exist in the database.");
    }
    const result = yield shared_1.prisma.member.create({
        data: payload,
    });
    return result;
});
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.member.findMany();
    return result;
});
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shared_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    return result;
});
const updateMemberByIdIntoDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield shared_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    if (payload.email) {
        const member = yield shared_1.prisma.member.findUnique({
            where: {
                email: payload === null || payload === void 0 ? void 0 : payload.email,
            },
        });
        if (memberId !== (member === null || member === void 0 ? void 0 : member.memberId)) {
            throw new Error("This email already exist in the database.");
        }
    }
    const result = yield shared_1.prisma.member.update({
        where: {
            memberId,
        },
        data: payload,
    });
    return result;
});
const deleteMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield shared_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    yield shared_1.prisma.member.delete({
        where: {
            memberId,
        },
    });
});
exports.MemberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberByIdIntoDB,
    deleteMemberByIdFromDB,
};
