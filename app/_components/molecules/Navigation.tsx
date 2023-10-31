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
    <nav className="md:flex md:flex-row">
      {items.map((item, index) => (
        <div>
          <Atom.Button type="link" key={index}>
            <div className="text-white">{item.name}</div>
          </Atom.Button>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
