// ANCHOR: React
import * as React from 'react';

// ANCHOR: Next
import { useRouter } from 'next/router'

// ANCHOR: SWR
import useSWR from "swr";

// ANCHOR: GraphQL Definition
import { userDataDefinition } from '@definitions/index';

// ANCHOR: Request
import { userDataRequest } from '@requests/modules/user/userDataRequest';

// ANCHOR: MD5
import md5 from 'md5';

// ANCHOR: Profile Page
function ProfilePage() {
  const router = useRouter()
  const { pid } = router.query

  const { data, error } = useSWR(md5(userDataDefinition), () => userDataRequest({ id: pid }));

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>{data.findUser.email}</div>
  );
};

export default ProfilePage;
