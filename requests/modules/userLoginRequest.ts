// ANCHOR: GET request
import { POST } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/modules/userLoginDefinition";

// ANCHOR User Login Interface
interface UserLoginInterface {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}

export async function userLoginRequest(email: string, password: string): Promise<UserLoginInterface> {
  const data = await POST('/data', {
    query: userLoginDefinition(email, password),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return (await data.json()) as any;
}
