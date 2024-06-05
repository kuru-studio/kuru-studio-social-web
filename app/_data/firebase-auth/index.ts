import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";

interface FirebaseAuth {
  firebase_auth: Auth | null;
}

const firebaseConfig = {
  apiKey: "AIzaSyDknUDL6WwsAGFyiBru36J8hKWc6yD6B28",
  authDomain: "kuru-studio-social-firebase-dv.firebaseapp.com",
  databaseURL: "https://kuru-studio-social-firebase-dv.firebaseio.com",
  projectId: "kuru-studio-social-firebase-dv",
  storageBucket: "kuru-studio-social-firebase-dv.appspot.com",
  messagingSenderId: "1021677199092",
  appId: "1:1021677199092:web:db5bf81fe426816a5808a1",
  measurementId: "G-KNH9M8BJCC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const initialState: FirebaseAuth = {
  firebase_auth: auth,
};

export const authSlice = createSlice({
  name: "firebase-auth",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
