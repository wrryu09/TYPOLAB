import React from "react";
import { LogoIco } from "../../public/svgs";
import Image from "next/image";

const Logo = () => {
  return <Image src={LogoIco} alt="logo" className="mobile:w-6" />;
};

export default Logo;
