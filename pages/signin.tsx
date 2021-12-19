// ANCHOR: React
import * as React from 'react';
import { useState } from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Request
import { userLoginRequest } from '@requests/modules/userLoginRequest';

// ANCHOR: Utilities
import { setUserToken } from '@utilities/setUserToken';
import { clearUserToken } from '@utilities/clearUserToken';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
}

// ANCHOR: Login Page
export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const token = useSelector((state: IRootState) => state.userToken);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await userLoginRequest({ email, password });
    const token = user.signinUser.token;
    setUserToken(token);
  }

  const handleLogOut = (event) => {
    event.preventDefault();
    clearUserToken();
  }

  const SignedInComponent = () => {
    return (
      <div>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }

  const SignedOutComponent = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <input type="submit" />
      </form>
    );
  }

  return (
    <React.Fragment>{token != null ? <SignedInComponent /> : <SignedOutComponent />}</React.Fragment>
  );
};
