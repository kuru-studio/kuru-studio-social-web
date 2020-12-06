import firebase from "firebase/app";
import "firebase/auth";

import Head from 'next/head'

import { GET } from '../utils/request';

import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

import { LogOutButton } from '../components/LogOutButton';

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: `G-${process.env.MEASUREMENT_ID}`,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let userLoggedIn: boolean = false;

function listenToCurrentUserState(): void {
  firebase.auth().onAuthStateChanged((user: any): void => {
    if (user) {
      user.getIdToken().then((idToken: string): void => {
        console.log('Token:', `Bearer ${idToken}`);
        userLoggedIn = true;
      });
      window.sessionStorage.user = JSON.stringify(user);
    } else {
      console.log('Not logged in.');
      userLoggedIn = false;
    }
  });
}

listenToCurrentUserState();

function LoggedOutPage() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
}

async function LoggedInPage() {
  const token = JSON.parse(window.sessionStorage.user);
  const data = await GET(`/users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  });

  return (
    <>
      users: { data.forEach((item) => (item))  }
    </>
  );
}

function HomePage() {
  return (
    <>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
      <div>Welcome to {process.env.SITE_NAME}!!!</div>
      { userLoggedIn ? "hohoho" : "haha" }
      <LoggedOutPage />
      <LogOutButton />
    </>
  );
}

export default HomePage
