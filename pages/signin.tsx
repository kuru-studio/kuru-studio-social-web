// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector } from 'react-redux'

// ANCHOR: Authentication
import { googleSignIn, facebookSignIn, userSignOut } from '../utils/authenticate';

// ANCHOR: Interface
interface IRootState {
  authenticateReducer: string | null;
}

// ANCHOR: Sign In Page
export default () => {
  const token: string | null = useSelector((state: IRootState) => state.authenticateReducer);
  const userSignedIn: boolean = token ? true : false;

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
                </>
              )
        }
      </li>
    </ul>
  )
}
