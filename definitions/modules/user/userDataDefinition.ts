// ANCHOR: Import GraphQL Request
import { gql } from 'graphql-request';

export const userDataDefinition = gql`
  query userDataDefinition ($id: Int) {
    findUser(id: $id) {
      email
    }
  }
`
