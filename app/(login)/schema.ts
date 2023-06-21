import { z } from "zod";

export const UserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .nonempty()
    .min(4, { message: "Your email must have at least 4 characters" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .nonempty()
    .min(4, { message: "Your password must have at least 4 characters" }),
});

export type User = z.infer<typeof UserSchema>;
