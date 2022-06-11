import { gql } from '@apollo/client';

export const AUTH_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      jwt
    }
  }
`;
