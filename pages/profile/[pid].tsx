// ANCHOR: React
import * as React from 'react';

// ANCHOR: GraphQL Definition
import { userDataDefinition } from '@definitions/index';

// ANCHOR: Request
import { userDataRequest } from '@requests/modules/user/userDataRequest';

// ANCHOR: Fetch Data
import { fetchData } from '@utilities/index';

// ANCHOR: Get Server Side Props
export async function getServerSideProps(context: any) {
  if (!context.params) throw new Error('Missing ID');

  return { props: { id: context.params.pid } };
};

// ANCHOR: Profile Page
function ProfilePage({ id }) {
  const { data, error } = fetchData(userDataDefinition, userDataRequest, { id });

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>{data.findUser.email}</div>
  );
};

export default ProfilePage;
