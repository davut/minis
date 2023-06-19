import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedImg = ({ path, alt, className = "" }) => {
  return (
    <div className="overflow-x-hidden overflow-hiddden">
      {/* <HeroPageAnimatedLeft /> */}
      <Image
        src={path}
        alt={alt}
        width={"700"}
        height={"700"}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className={`${className} w-full `}
      />
    </div>
  );
};

export default AnimatedImg;
