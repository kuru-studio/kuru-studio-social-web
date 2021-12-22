// ANCHOR: Data Type
import type { userLoginRequestParametersInterface } from "@interfaces/index";

export function userLoginDefinition(userLoginRequestParameters: userLoginRequestParametersInterface) {
  return (`
    mutation {
      signinUser(
        credentials: {
          email: "${userLoginRequestParameters.email}",
          password: "${userLoginRequestParameters.password}"
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
