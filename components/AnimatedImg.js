import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedImg = ({ path, alt, className = "", direction = "700" }) => {
  return (
    <motion.div
      className="overflow-x-hidden overflow-hiddden"
      // initial={{ x: direction }}
      // animate={{ x: 0 }}
      // transition={{ delay: 0.3, staggerChildren: 0.08 }}
    >
      {/* <HeroPageAnimatedLeft /> */}
      <Image
        src={path}
        alt={alt}
        width={"700"}
        height={"700"}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        placeholder="blur"
        blurDataURL="data:..."
        automatically
        provided
        className={`${className} w-full `}
      />
    </motion.div>
  );
};

export default AnimatedImg;
