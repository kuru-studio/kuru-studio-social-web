// ANCHOR: GET request
import { POST } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/modules/userLoginDefinition";

// ANCHOR: Data Type
import { userLoginRequestType } from "@types";

export async function userLoginRequest(email: string, password: string): Promise<userLoginRequestType> {
  const data = await POST('/data', {
    query: userLoginDefinition(email, password),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return (await data.json()) as any;
}
