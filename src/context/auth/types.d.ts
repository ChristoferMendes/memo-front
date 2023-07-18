import { User } from '@generated/graphql';

export interface AuthProviderValues {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}
