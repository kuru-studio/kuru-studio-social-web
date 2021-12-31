// ANCHOR: Next
import Head from 'next/head'

// ANCHOR: Template
import LandingTemplate from '@components/templates/Landing'

// ANCHOR: HomePage
function HomePage() {
  return (
    <>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
      <LandingTemplate />
    </>
  );
}

export default HomePage;
