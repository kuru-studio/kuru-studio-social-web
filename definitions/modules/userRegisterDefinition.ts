// ANCHOR: Data Type
import type { userRegisterRequestParametersInterface } from "@interfaces/index";

export function userLoginDefinition(userRegisterRequestParameters: userRegisterRequestParametersInterface) {
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
        token
        name
        email
      }
    }
  `);
}
