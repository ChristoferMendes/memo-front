import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: Stirng!, $password: String!, $name: String!) {
    createUser(createUserInput: { email: $email, password: $password, name: $name }) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;
