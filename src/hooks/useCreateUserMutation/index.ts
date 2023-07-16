import { ApolloError, useMutation } from '@apollo/client';
import { UseFormSetError } from 'react-hook-form';

import { UserRegisterResponse } from './types';
import { UserRegister } from '../../components/RegisterForm/schema';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/DefaultErrorMessage';
import { CREATE_USER } from '../../graphql/auth';

export const useCreateUserMutation = (setError: UseFormSetError<UserRegister>) => {
  const [execute] = useMutation<UserRegisterResponse>(CREATE_USER);

  const onMutationError = (error: ApolloError) => {
    const { message } = error;
    const possibleErrors = ['User already exists'];

    const isMappedError = possibleErrors.some((possibleErrors) => message.includes(possibleErrors));

    if (!isMappedError) {
      return setError('email', { message: DEFAULT_ERROR_MESSAGE });
    }

    setError('email', { message });
  };

  const createUser = (email: string, password: string, name: string) => {
    return execute({ variables: { email, password, name }, onError: onMutationError });
  };

  return [createUser] as const;
};
