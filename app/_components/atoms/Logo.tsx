import * as React from "react";
import Image from "next/image";
import LogoImage from "../../_assets/logo.png";

interface ILogoProps {
  width: number;
  height: number;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ width, height }) => {
  return (
    <Image
      src={LogoImage}
      width={width}
      height={height}
      alt="Kuru Studio Social"
    />
  );
};

export default Logo;
