import { gql } from 'src/__generated__';

export const LOGIN = gql(`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
        password
      }
      token
    }
  }
`);

export const CREATE_USER = gql(`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(createUserInput: { email: $email, password: $password, name: $name }) {
      id
      name
      email
    }
  }
`);

export const WHO_AM_I = gql(`
  query whoami {
    me {
      id
      name
      email
      password
    }
  }
`);
