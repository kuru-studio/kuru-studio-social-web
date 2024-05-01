"use client";
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDknUDL6WwsAGFyiBru36J8hKWc6yD6B28",
  authDomain: "kuru-studio-social-firebase-dv.firebaseapp.com",
  databaseURL: "https://kuru-studio-social-firebase-dv.firebaseio.com",
  projectId: "kuru-studio-social-firebase-dv",
  storageBucket: "kuru-studio-social-firebase-dv.appspot.com",
  messagingSenderId: "1021677199092",
  appId: "1:1021677199092:web:db5bf81fe426816a5808a1",
  measurementId: "G-KNH9M8BJCC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function FirebaseExamplePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully
      console.log(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      console.log(userCredential.user.accessToken);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Firebase Authentication</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
