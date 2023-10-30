import Head from 'next/head';
import Organism from "@organism";
import "../../_styles/globals.css";

const Default = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <Head>
        <title>Kuru Studio Social</title>
        <meta name="description" content="Kuru Studio Social" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Organism.Wrapper>
          <Organism.Header />
          <div>{children}</div>
          <Organism.Footer />
        </Organism.Wrapper>
      </body>
    </html>
  );
}

export default Default;
