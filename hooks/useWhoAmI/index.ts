import { useQuery } from "@apollo/client";
import { WHO_AM_I } from "../../graphql/user";

export const useWhoAmI = () => {
  return useQuery(WHO_AM_I);
};
