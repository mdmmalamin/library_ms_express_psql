"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const middlewares_1 = require("./app/middlewares");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//? Parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//? Welcome Routes
app.get("/", (req, res) => {
    res.send({
        message: "Welcome To Library Management System Server...",
    });
});
//? APIs All Routes
app.use("/api", routes_1.default);
//! Global Error Handler
app.use(middlewares_1.globalErrorHandler);
//? Not Found Handler
app.use(middlewares_1.notFoundHandler);
exports.default = app;
