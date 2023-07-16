import { z } from 'zod';

import { UserSchema } from './login';

export const UserRegisterSchema = UserSchema.extend({
  name: z.string(),
});

export type UserRegisterType = z.infer<typeof UserRegisterSchema>;
