// ANCHOR: Data Type
import type { userRegisterRequestParametersInterface } from "@interfaces/index";

export function userRegisterDefinition(userRegisterRequestParameters: userRegisterRequestParametersInterface) {
  return (`
    mutation {
      createUser(
        name: "${userRegisterRequestParameters.name}",
        authProvider: {
          credentials: {
            email: "${userRegisterRequestParameters.email}",
            password: "${userRegisterRequestParameters.password}"
          }
        }
      ) {
        id
        name
        email
      }
    }
  `);
}
