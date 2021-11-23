// ANCHOR: Next Import
import Link from 'next/link'

// ANCHOR: Organism Import
import FooterOrganism from "@components/organisms/FooterOrganism";
import HeaderOrganism from "@components/organisms/HeaderOrganism";

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
