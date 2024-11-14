import { z } from "zod";

const createSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    genre: z.string().min(1, "Genre is required"),
    publishedYear: z
      .number()
      .int()
      .gte(0, "Published year must be a 4-digit year")
      .lte(9999, "Published year must be a 4-digit year"),
    totalCopies: z
      .number()
      .int()
      .gte(0, "Total copies must be a non-negative integer"),
    availableCopies: z
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

const updateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const BookValidation = {
  createSchema,
  updateSchema,
};
