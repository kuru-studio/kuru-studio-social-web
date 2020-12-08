import Head from 'next/head'
import Link from 'next/link'

function HomePage() {
  return (
    <>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
      <div>Welcome to {process.env.SITE_NAME}!</div>
      <div><Link href="/signin">Sign In</Link></div>
    </>
  );
}

export default HomePage
