"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const shared_1 = require("../../shared");
const notFoundHandler = (req, res, next) => {
    // console.log(req);
    res.status(shared_1.httpStatus.NOT_FOUND).json({
        success: false,
        status: shared_1.httpStatus.NOT_FOUND,
        message: "API NOT FOUND!",
        // error: {
        //   path: req.originalUrl,
        //   message: "Your requested path is not valid!",
        // },
    });
};
exports.notFoundHandler = notFoundHandler;
