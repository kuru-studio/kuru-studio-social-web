// ANCHOR: Next
import Link from 'next/link'

// ANCHOR: Organisms
import HeaderOrganism from "@components/organisms/Header.tsx";
import FooterOrganism from "@components/organisms/Footer.tsx";

// ANCHOR: Landing Template
export default function LandingTemplate() {
  return (
    <>
      <HeaderOrganism />
      <main>
        <div>Welcome to {process.env.SITE_NAME}!</div>
        <div><Link href="/signin">Sign In</Link></div>
      </main>
      <FooterOrganism />
    </>
  );
}
