import { getClient } from "../lib/client";
import { gql } from "@apollo/client";

export const revalidate = 5;
const query = gql`query Now {
    now(id: "1")
}`;

export default async function Page() {
  const { data } = await getClient().query({ query });

  return (
    <div>
      Ongoing Maintenance: {data.now}
    </div>
  );
}
