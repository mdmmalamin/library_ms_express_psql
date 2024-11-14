import express from "express";
import { BookRoutes } from "../modules/Book/book.route";
import { MemberRoutes } from "../modules/Member/member.route";
import { BorrowBookRoutes } from "../modules/BorrowBook/borrowBook.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/",
    route: BorrowBookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
