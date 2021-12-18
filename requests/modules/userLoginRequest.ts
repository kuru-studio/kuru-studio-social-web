// ANCHOR: GQL request
import { GQL } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/index";

// ANCHOR: Data Type
import type { userLoginRequestInterface } from "@interfaces/index";

export async function userLoginRequest(email: string, password: string): Promise<userLoginRequestInterface> {
  const data = await GQL('/data', userLoginDefinition(email, password));

  return (await data) as userLoginRequestInterface;
}
