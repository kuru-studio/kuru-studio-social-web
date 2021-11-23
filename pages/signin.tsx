// ANCHOR: React
import * as React from 'react';

// ANCHOR: Next
import Link from 'next/link'

// ANCHOR: Redux
import { useSelector } from 'react-redux'

// ANCHOR: Authentication
import {
  googleSignIn,
  facebookSignIn,
  twitterSignIn,
  userSignOut,
} from '@utilities/authenticate-old';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
}

// ANCHOR: Sign In Page
export default () => {
  const userToken: string | null = useSelector((state: IRootState) => state.userToken);
  const userSignedIn: boolean = userToken ? true : false;

  return (
    <ul>
      <li>
        {
          userSignedIn
            ? <button onClick={userSignOut}>Sign Out</button>
            : (
                <>
                  <button onClick={googleSignIn}>Sign In with Google</button>
                  <button onClick={facebookSignIn}>Sign In with Facebook</button>
                  <button onClick={twitterSignIn}>Sign In with Twitter</button>
                </>
              )
        }
      </li>
      <li><Link href="/">Homepage</Link></li>
    </ul>
  )
}
