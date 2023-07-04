import { User } from '../../hooks/auth/useSignIn/useLoginMutation/types';

export interface AuthProviderValues {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}
