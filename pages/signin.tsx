// ANCHOR: React
import * as React from 'react';
import { useState } from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Request
import { userLoginRequest } from '@requests/modules/userLoginRequest';

// ANCHOR: Redux Actions
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { setCookie } from '@utilities/cookie';
import { checkWindowObject } from "@utilities/checkWindowObject";

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
    if (checkWindowObject) {
      setCookie("userToken", token, 14);
    }
    dispatch(userTokenAction(token));
  }

  return (
    <div>
      Token:{ ` ${token}` }
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
    </div>
  );
};
