import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Image
      src="/images/logo.webp"
      width={300}
      height={300}
      alt="logo"
      className="w-20"
    />
  );
};
