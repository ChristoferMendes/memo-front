import { useAuth } from '@context/auth';
import { User } from '@entities/User/user.base.types';
import { storeTokenOnAsyncStorage } from '@services/asyncStorage';

export const useSignIn = () => {
  const { signIn } = useAuth();

  const handleRedirect = (token: string, user: User) => {
    storeTokenOnAsyncStorage(token);
    signIn(user);
  };

  return { handleRedirect };
};
