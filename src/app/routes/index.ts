import express from "express";
import { BookRoutes } from "../modules/Book/book.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  // {
  //   path: "/members",
  //   route: null,
  // },
  // {
  //   path: "/",
  //   route: null,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
