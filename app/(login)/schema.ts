import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().nonempty().min(4),
  password: z.string().nonempty().min(4),
});

export type User = z.infer<typeof UserSchema>;
