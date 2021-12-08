// ANCHOR: Next Import
import Link from 'next/link'

// ANCHOR: Organism Import
import FooterOrganism from "@components/organisms/FooterOrganism";
import HeaderOrganism from "@components/organisms/HeaderOrganism";

// ANCHOR: React Grid System Import
import { Container, Row, Col } from 'react-grid-system';

// ANCHOR: Landing Template
export default function LandingTemplate() {
  return (
    <>
      <HeaderOrganism />
      <Container>
        <Row>
          <Col>Sidebar 1</Col>
          <Col>
            <main>
              <div>Welcome to {process.env.SITE_NAME}!</div>
              <div><Link href="/signin">Sign In</Link></div>
            </main>
          </Col>
          <Col>Sidebar 2</Col>
        </Row>
      </Container>
      <FooterOrganism />
    </>
  );
}
