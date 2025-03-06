import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Image
      src="/images/minis_logo_V2.webp"
      width={300}
      height={300}
      alt="logo"
      className="w-20"
    />
  );
};
