import { ApolloError, useMutation } from '@apollo/client';
import { UseFormSetError } from 'react-hook-form';
import { DEFAULT_ERROR_MESSAGE } from 'src/constants/DefaultErrorMessage';

import { UserLoginResponse } from './types';
import { LOGIN } from '../../../graphql/auth';

export const useLoginMutation = <T>(setError: UseFormSetError<{ email: string }>) => {
  const [execute, { data, loading, error }] = useMutation<UserLoginResponse>(LOGIN);

  const onMutationError = (error: ApolloError) => {
    const { message } = error;
    const possibleErros = ['User not found', 'Invalid password'];

    const isMappedError = possibleErros.some((possibleError) => {
      return message.includes(possibleError);
    });

    if (!isMappedError) {
      return setError('email', { message: DEFAULT_ERROR_MESSAGE });
    }

    setError('email', { message });
  };

  const login = (email: string, password: string) => {
    return execute({
      variables: { email, password },
      onError: onMutationError,
    });
  };

  return [login, { data, loading, error }] as const;
};
