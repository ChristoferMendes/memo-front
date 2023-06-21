import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URI } from "@env";

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});
