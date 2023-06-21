import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/auth";

export const useLoginMutation = () => {
  const [execute] = useMutation(LOGIN);

  const login = (email: string, password: string) => {
    return execute({ variables: { email, password } });
  };

  return login;
};
