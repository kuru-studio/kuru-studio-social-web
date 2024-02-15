import Atom from "@atom";

const User: React.FunctionComponent = () => {
  return (
    <div className="flex gap-3 m-3 md:m-0">
      <div className="grow md:grow-0">
        <Atom.Button block type="primary">
          Log In
        </Atom.Button>
      </div>
      <div className="grow md:grow-0">
        <Atom.Button block type="primary">
          Register
        </Atom.Button>
      </div>
    </div>
  );
};

export default User;
