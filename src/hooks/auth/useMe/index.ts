import { useQuery } from '@apollo/client';
import { WHO_AM_I } from 'src/graphql/user';

import { Me } from './types';

export const useMe = () => {
  const { data } = useQuery<Me>(WHO_AM_I);

  return { data };
};
