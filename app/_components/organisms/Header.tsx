import Atom from "@atom";
import Molecule from "@molecule";

const Header = () => {
  return (
    <header className="bg-[#cd3c2b] shadow-lg border-b border-red-800">
      <div className="container mx-auto py-1 flex items-center">
        <Atom.Logo width={50} height={50} />
        <div className="grow flex items-center justify-between">
          <Molecule.Navigation />
          <Molecule.User />
        </div>
      </div>
    </header>
  );
}

export default Header;
