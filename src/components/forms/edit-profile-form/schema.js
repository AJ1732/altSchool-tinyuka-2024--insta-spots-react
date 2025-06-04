import { z } from "zod";

export const editProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  profession: z.string().min(2, "Profession is required"),
  profileImage: z.string().min(2, "profileImage is required"),
});
