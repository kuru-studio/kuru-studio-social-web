// ANCHOR: GET request
import { GET } from "@requests/method";

export async function usersListRequest(token: any): Promise<any> {
  const data = await GET('/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.payload}`,
    },
  });

  return (await data.json()) as any;
}
