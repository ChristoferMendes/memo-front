import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/auth";
import { UserLoginResponse } from "../app/(login)/types";

export const useLoginMutation = () => {
  const [execute, { data, loading, error }] =
    useMutation<UserLoginResponse>(LOGIN);

  const login = (email: string, password: string) => {
    return execute({
      variables: { email, password },
      onCompleted(data, clientOptions) {
        console.warn(data);
      },
    });
  };

  return [login, { data, loading, error }] as const;
};
