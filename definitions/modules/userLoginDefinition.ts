// ANCHOR: Data Type
import type { userRegisterRequestParametersInterface } from "@interfaces/index";

export function userRegisterDefinition(userRegisterRequestParameters: userRegisterRequestParametersInterface) {
  return (`
    mutation {
      signinUser(
        credentials: {
          email: "${userRegisterRequestParameters.email}",
          password: "${userRegisterRequestParameters.password}"
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
