import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://0321-2001-1284-f50e-145b-1d37-e16a-f846-c4e7.ngrok-free.app/graphql",
  cache: new InMemoryCache(),
});
