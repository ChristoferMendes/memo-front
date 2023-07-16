import { useQuery } from '@apollo/client';
import { MeResponse } from '@entities/User/graphql/user.auth.types';
import { WHO_AM_I } from 'src/graphql/auth';

export const useMe = () => {
  const { data } = useQuery<MeResponse>(WHO_AM_I);

  return { data };
};
