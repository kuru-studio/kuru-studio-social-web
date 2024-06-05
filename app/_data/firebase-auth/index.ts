import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseAuth {
  firebase_auth: Auth | null;
  userToken: string;
}

const firebaseConfig = {
  // we should probably hide this secret
  apiKey: "AIzaSyDknUDL6WwsAGFyiBru36J8hKWc6yD6B28",

  authDomain: "kuru-studio-social-firebase-dv.firebaseapp.com",
  databaseURL: "https://kuru-studio-social-firebase-dv.firebaseio.com",
  projectId: "kuru-studio-social-firebase-dv",
  storageBucket: "kuru-studio-social-firebase-dv.appspot.com",
  messagingSenderId: "1021677199092",
  appId: "1:1021677199092:web:db5bf81fe426816a5808a1",
  measurementId: "G-KNH9M8BJCC",
};
// TODO: add check if firebaseConfig fails here
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const initialState: FirebaseAuth = {
  firebase_auth: auth,
  userToken: "",
};

export const authSlice = createSlice({
  name: "firebase-auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = authSlice.actions;

export default authSlice.reducer;
