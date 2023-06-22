import { useMutation } from '@apollo/client';

import { UserLoginResponse } from './types';
import { LOGIN } from '../../graphql/auth';

export const useLoginMutation = (setError: CallableFunction) => {
  const [execute, { data, loading, error }] = useMutation<UserLoginResponse>(LOGIN);

  const login = (email: string, password: string) => {
    return execute({
      variables: { email, password },

      onError(error) {
        const { message } = error;
        const possibleErros = ['User not found', 'Invalid password'];

        const isMappedError = possibleErros.some((possibleError) => {
          return message.includes(possibleError);
        });

        if (!isMappedError) {
          return setError('email', { message: 'Oops! Something went wrong' });
        }

        setError('email', { message });
      },
    });
  };

  return [login, { data, loading, error }] as const;
};
