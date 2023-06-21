import { gql } from "@apollo/client";

export const WHO_AM_I = gql`
  query whoami {
    me {
      id
      name
      email
    }
  }
`;
