// ANCHOR: GET request
import { gqlRequest } from "@requests/index";

// ANCHOR: GraphQL Definition
// import { userLoginDefinition } from "@definitions";
import { userLoginDefinition } from "../../definitions";

// ANCHOR: Data Type
// import { userLoginRequestType } from "@types";
import { userLoginRequestType } from "../../types";

export async function userLoginRequest(email: string, password: string): Promise<userLoginRequestType> {
  const data = await gqlRequest('/data', userLoginDefinition(email, password));

  return (await data) as userLoginRequestType;
}
