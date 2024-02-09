"use client";
import Atom from "@atom";
import { useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { show } from "@/app/_data/modal";
import { useAppDispatch } from "@/app/_data/hooks";

const User: React.FunctionComponent = () => {
  const [token, setToken] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-3 m-3 md:m-0">
      <div className="grow md:grow-0">
        <Atom.Visibility state={!token}>
          <Atom.Button
            style={{ color: "white", fontWeight: "bold" }}
            icon={<LoginOutlined />}
            type="text"
            onClick={() => dispatch(show())}
          >
            Log In
          </Atom.Button>
        </Atom.Visibility>
        <Atom.Visibility state={!!token}>
          <Atom.Button icon={<LoginOutlined />} type="text">
            My Profile
          </Atom.Button>
        </Atom.Visibility>
      </div>
    </div>
  );
};

export default User;
