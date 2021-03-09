import {GET} from ".";

export async function getUsers(token: string): Promise<any> {
  const data = await GET('/attachment', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as any;
}
