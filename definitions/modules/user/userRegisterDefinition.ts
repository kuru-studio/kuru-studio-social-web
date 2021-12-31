// ANCHOR: Import GraphQL Request
import { gql } from 'graphql-request';

export const userRegisterDefinition = gql`
  mutation userRegisterDefinition ($name: String!, $email: String!, $password: String!) {
    createUser(
      name: $name,
      authProvider: {
        credentials: {
          email: $email,
          password: $password
        }
      }
    ) {
      id
      name
      email
    }
  }
`
