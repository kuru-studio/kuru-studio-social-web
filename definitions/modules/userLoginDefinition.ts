export function userLoginDefinition(email: string, password: string) {
  return (`
    mutation {
      signinUser(
        credentials: {
          email: "${email}",
          password: "${password}"
        }
      ) {
        token
        user {
          id
        }
      }
    }
  `);
}
