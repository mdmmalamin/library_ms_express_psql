import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post("/", MemberController.createMember);

router.get("/", MemberController.getAllMembers);

router.get("/:memberId", MemberController.getMemberById);

router.put("/:memberId", MemberController.updateMemberById);

router.delete("/:memberId", MemberController.deleteMemberById);

export const MemberRoutes = router;
