// ANCHOR: Next Import
import Link from 'next/link'

// ANCHOR: Organism Import
import FooterOrganism from "@components/organisms/FooterOrganism";
import HeaderOrganism from "@components/organisms/HeaderOrganism";

// ANCHOR: Kuru Studio Design Import
import { ExampleComponent } from 'kuru-studio-design'

// ANCHOR: Landing Template
export default function LandingTemplate() {
  return (
    <>
      <HeaderOrganism />
      <main>
        <ExampleComponent text="Create React Library Example 😄" />
        <div>Welcome to {process.env.SITE_NAME}!</div>
        <div><Link href="/signin">Sign In</Link></div>
      </main>
      <FooterOrganism />
    </>
  );
}
