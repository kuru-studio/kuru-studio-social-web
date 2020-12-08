import firebase from "firebase/app";
import "firebase/auth";

import Head from 'next/head'

import { GET } from '../utils/request';

import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

import { LogOutButton } from '../components/LogOutButton';

function LoggedOutPage() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
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
      <LoggedOutPage />
    </>
  );
}

export default HomePage
