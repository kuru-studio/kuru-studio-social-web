"use client";
import { useState } from 'react';
import { request } from 'graphql-request';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const mutation = `
        mutation signIn($email: String!, $password: String!) {
          signIn(input: {
            credentials: {
              email: $email,
              password: $password
            }
          }) {
            token
            user {
              id
            }
          }
        }
      `;

      const variables = {
        email,
        password,
      };

      const data = await request("http://localhost:3001/data", mutation, variables);
      console.log('Successful signIn:', data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};
