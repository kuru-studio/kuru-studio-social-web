import { GET } from "../";

export async function getUsersRequest(token: any): Promise<any> {
  const data = await GET('/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.payload}`,
    },
  });

  return (await data.json()) as any;
}
