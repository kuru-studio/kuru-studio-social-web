import Atom from "@atom";

import * as React from "react";
import Link from "next/link";
import { UrlObject } from "url";

interface ItemProps {
  name: string;
  url: string | UrlObject;
}
interface INavigationProps {
  items: ItemProps[];
}

const Navigation: React.FunctionComponent<INavigationProps> = ({ items }) => {
  return (
    <nav className="md:flex md:flex-row">
      {items.map((item, index) => (
        <div>
          <Atom.Button type="link" key={index}>
            <Link href={item.url}>
              <p className="text-neutral-100">{item.name}</p>
            </Link>
          </Atom.Button>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
