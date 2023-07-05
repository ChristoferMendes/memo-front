import { useQuery } from '@apollo/client';
import { ME } from '@graphql/auth';

export const useMe = () => {
  const { data } = useQuery(ME);

  return { data };
};
