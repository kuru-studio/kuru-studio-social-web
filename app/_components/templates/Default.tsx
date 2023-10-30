import Organism from "@organism";

const Default = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Organism.Header />
        <div className="container mx-auto">{children}</div>
        <Organism.Footer />
      </body>
    </html>
  );
}

export default Default;
