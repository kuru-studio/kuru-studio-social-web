// ANCHOR: React
import * as React from 'react';

// ANCHOR: Next
import { useRouter } from 'next/router'

// ANCHOR: Profile Page
function ProfilePage() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      Profile Page: {pid}
    </div>
  );
};

export default ProfilePage;
