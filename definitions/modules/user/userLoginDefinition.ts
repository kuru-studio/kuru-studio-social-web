// ANCHOR: Import GraphQL Request
import { gql } from 'graphql-request';

export const userLoginDefinition = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(
      credentials: {
        email: $email,
        password: $password
      }
    ) {
      token
      user {
        id
      }
    }
  }
`
