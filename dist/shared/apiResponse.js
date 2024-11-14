"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponse = void 0;
const apiResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        status: data.statusCode,
        message: data.message,
        data: data.data || null || undefined,
    });
};
exports.apiResponse = apiResponse;
