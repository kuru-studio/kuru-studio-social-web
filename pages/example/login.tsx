// ANCHOR: React
import * as React from 'react';
import { useState } from 'react';

// ANCHOR: Redux
import { useDispatch } from 'react-redux';

// ANCHOR: Request
import { userLoginRequest } from '@requests/modules/userLoginRequest';

// ANCHOR: Login Page
export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(await userLoginRequest(email, password));
  }

  return (
    <div>
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
