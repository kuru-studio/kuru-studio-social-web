// ANCHOR: GET request
import { POST } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/modules/userLoginDefinition";

export async function usersListRequest(email: string, password: string): Promise<any> {
  const data = await POST('/data', {
    query: userLoginDefinition(email, password),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return (await data.json()) as any;
}
