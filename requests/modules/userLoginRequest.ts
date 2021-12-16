// ANCHOR: GET request
import { POST } from "@requests/index";

// ANCHOR: GraphQL Definition
// import { userLoginDefinition } from "@definitions";
import { userLoginDefinition } from "../../definitions";

// ANCHOR: Data Type
import { userLoginRequestType } from "@types";

export async function userLoginRequest(email: string, password: string): Promise<userLoginRequestType> {
  const data = await POST('/data', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: userLoginDefinition(email, password)
    }),
  });

  return (await data.json()) as userLoginRequestType;
}
