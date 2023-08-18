import { useQuery } from '@apollo/client';
import { WHO_AM_I } from 'src/graphql/auth';

export const useMe = () => {
  const { data } = useQuery(WHO_AM_I);

  return { data };
};
