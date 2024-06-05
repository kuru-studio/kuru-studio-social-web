"use client";
import { useState } from "react";
import { signIn } from "../_data/firebase-auth";

// import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

export default function FirebaseExamplePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth.firebase_auth);
  const token = useSelector((state: any) => state.auth.userToken);

  const handleSignUp = async () => {
    try {
      const userCredential: any = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed up successfully
      dispatch(signIn(userCredential.user.accessToken));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed in successfully
      dispatch(signIn(userCredential.user.accessToken));
    } catch (error: any) {
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
      {token}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
