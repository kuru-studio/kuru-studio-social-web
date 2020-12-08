import firebase from "firebase/app";
import "firebase/auth";

import Head from 'next/head'

function HomePage() {
  return (
    <>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
      <div>Welcome to {process.env.SITE_NAME}!</div>
    </>
  );
}

export default HomePage
