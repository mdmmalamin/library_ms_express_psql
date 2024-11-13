import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: (req, res) => "Route index test",
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
