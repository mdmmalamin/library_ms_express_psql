"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        genre: zod_1.z.string().min(1, "Genre is required"),
        publishedYear: zod_1.z
            .number()
            .int()
            .gte(0, "Published year must be a 4-digit year")
            .lte(9999, "Published year must be a 4-digit year"),
        totalCopies: zod_1.z
            .number()
            .int()
            .gte(0, "Total copies must be a non-negative integer"),
        availableCopies: zod_1.z
            .number()
            .int()
            .gte(0, "Available copies must be a non-negative integer"),
    }),
    // .superRefine((data, ctx) => {
    //   if (data.availableCopies > data.totalCopies) {
    //     ctx.addIssue({
    //       code: "custom", // Required code field
    //       path: ["availableCopies"],
    //       message: "Available copies cannot exceed total copies",
    //     });
    //   }
    // }),
});
const updateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
    }),
});
exports.BookValidation = {
    createSchema,
    updateSchema,
};
