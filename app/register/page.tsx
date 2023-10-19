"use client";
import { useState } from 'react';
import { request } from 'graphql-request';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const mutation = `
        mutation createUser($email: String!, $password: String!, $name: String!) {
          createUser(input: {
            name: $name,
            authProvider: {
              credentials: {
                email: $email,
                password: $password
              }
            }
          }) {
            id
            name
            email
          }
        }
      `;

      const variables = {
        name,
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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
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
