import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/auth";

export const useCreateUserMutation = () => {
  const [execute] = useMutation(CREATE_USER);

  const createUser = (email: string, password: string, name: string) => {
    execute({ variables: { email, password, name } });
  };

  return createUser;
};
