import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
  passcode: z.string().min(8),
});
