import { z } from "zod";

export const newPostSchema = z.object({
  title: z.string().min(2, "Title is required"),
  src: z.string().url("Enter a valid image URL"),
});