import { SignInData } from './types';
import { useAuth } from '../../../context/auth';
import { storeTokenOnAsyncStorage } from '../../../services/asyncStorage';

export const useSignIn = () => {
  const { signIn } = useAuth();

  const handleRedirect = (data: SignInData) => {
    storeTokenOnAsyncStorage(data.token);
    signIn(data.user);
  };

  return { handleRedirect };
};
