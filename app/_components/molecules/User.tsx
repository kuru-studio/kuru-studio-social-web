import Atom from "@atom";

const User = () => {
  return (
    <div className="flex gap-3">
      <Atom.Button>Log In</Atom.Button>
      <Atom.Button>Register</Atom.Button>
    </div>
  );
}

export default User;
