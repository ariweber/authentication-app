import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().trim().min(2),
  email: z.string().email(),
  password: z.string().min(8, "A password must be at least 8 characters long.")
});
