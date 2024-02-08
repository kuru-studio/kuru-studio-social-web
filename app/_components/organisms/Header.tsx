"use client";
import { useState, useEffect } from "react";
import Atom from "@atom";
import Molecule from "@molecule";
import { MenuIcon } from "@heroicons/react/solid";
import { breakpoints } from "@/app/_utilities/constants";

const Header: React.FunctionComponent = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const mdMediaQuery = window.matchMedia(
      `(min-width: ${breakpoints["md"]}px)`
    );
    setIsMobileMenuVisible(mdMediaQuery.matches);
    mdMediaQuery.addEventListener("change", (e) => {
      setIsMobileMenuVisible(e.matches);
    });

    return () => {
      mdMediaQuery.removeEventListener("change", (e) => {
        setIsMobileMenuVisible(e.matches);
      });
    };
  }, []);

  return (
    <header className="bg-[#cd3c2b] shadow-lg border-b border-red-800">
      <div className="container mx-auto py-1 md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Atom.Logo width={50} height={50} />
          <div
            className="md:hidden"
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
          >
            <MenuIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <Atom.Visibility state={isMobileMenuVisible}>
          <div className="grow md:flex items-center justify-between md:border-0 border-t border-red-700">
            <Molecule.Navigation
              items={[
                { name: "Home", url: "/" },
                { name: "Trending", url: "/trending" },
                { name: "Wiki", url: "/wiki" },
              ]}
            />
            <Molecule.User />
          </div>
        </Atom.Visibility>
      </div>
    </header>
  );
};

export default Header;
