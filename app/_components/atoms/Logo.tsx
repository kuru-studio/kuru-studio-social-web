import Image from 'next/image';
import LogoImage from '../../_assets/logo.png';

const Logo = ({ width, height }) => {
  return (
    <Image
      src={LogoImage}
      width={width}
      height={height}
      alt="Kuru Studio Social"
    />
  );
}

export default Logo;
