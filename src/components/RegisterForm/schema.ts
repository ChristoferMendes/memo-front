import { z } from 'zod';

import { UserSchema } from '../../app/(auth)/login/schema';

export const UserRegisterSchema = UserSchema.extend({
  name: z.string(),
});

export type UserRegister = z.infer<typeof UserRegisterSchema>;
