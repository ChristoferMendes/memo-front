import { gql } from '@apollo/client';

export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
    id
    name
    email
  }
`;

export const LOGIN = gql`
  ${CORE_USER_FIELDS}

  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        ...CoreUserFields
      }
      token
    }
  }
`;

export const CREATE_USER = gql`
  ${CORE_USER_FIELDS}

  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(createUserInput: { email: $email, password: $password, name: $name }) {
      ...CoreUserFields
    }
  }
`;

export const WHO_AM_I = gql`
  ${CORE_USER_FIELDS}

  query whoami {
    me {
      ...CoreUserFields
    }
  }
`;
