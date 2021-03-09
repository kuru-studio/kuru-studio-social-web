import { GET } from "../";

export async function getUsersRequest(token: string): Promise<any> {
  const data = await GET('/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as any;
}
