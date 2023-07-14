import { ApolloClient, InMemoryCache } from '@apollo/client';
import { URI } from '@env';

import { useToken } from '../store/token';

export function Apollo() {
  const { token } = useToken();

  const headers = {
    authorization: `Bearer ${token}`,
  };

  return new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
    headers,
  });
}
