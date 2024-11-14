"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrowBook_controller_1 = require("./borrowBook.controller");
const router = express_1.default.Router();
router.post("/borrow", borrowBook_controller_1.BorrowBookController.createBorrowBook);
router.post("/return", borrowBook_controller_1.BorrowBookController.returnBorrowBook);
router.get("/borrow/overdue", borrowBook_controller_1.BorrowBookController.getOverDueBorrow);
router.get("/borrow", borrowBook_controller_1.BorrowBookController.getAllBorrowBooks);
exports.BorrowBookRoutes = router;
