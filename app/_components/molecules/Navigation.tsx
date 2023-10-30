import Atom from "@atom";

const Navigation = () => {
  const items = [
    {
      name: "Home"
    },
    {
      name: "Trending",
    },
    {
      name: "Wiki",
    },
  ];
  return (
    <nav className="container mx-auto">
      {items.map((item, index) => (
        <Atom.Button type="link" key={index}>
          <div className="text-white">{item.name}</div>
        </Atom.Button>
      ))}
    </nav>
  );
}

export default Navigation;
