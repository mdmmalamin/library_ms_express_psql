"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const shared_1 = require("../../shared");
const globalErrorHandler = (error, req, res, next) => {
    // console.log(req);
    res.status(shared_1.httpStatus.NOT_FOUND).json({
        success: false,
        status: shared_1.httpStatus.NOT_FOUND,
        message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong.",
        // error: error,
    });
};
exports.globalErrorHandler = globalErrorHandler;
