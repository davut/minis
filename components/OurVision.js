import Image from "next/image";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import { AnimatedText } from "./AnimatedText";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const OurVision = () => {
  const { t } = useTranslation("common");

  return (
    <div className="py-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-between contLg">
        {/* left */}
        <div className="w-full md:w-1/2 relative">
          {/* <Image
            width="500"
            height="500"
            src="/images/GroupEyes.svg"
            className="w-20"
          /> */}
          <div style={{ width: "50px" }}>
            <AnimatedImg
              path="/images/GroupEyes.svg"
              alt="eye logo"
              className=" w-10"
              direction="-100"
            />
          </div>
          <h1
            className=" font-inter font-extrabold text-3xl md:text-5xl leading-10 tracking-tighter text-[#863A20] flex-none order-0 mb-5 text-center md:text-start #863A20
"
          >
            <AnimatedText text={t("visionH1")} direction="left" />
          </h1>
          <p className="text-gray-600 leading-9 text-xl">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur. Viverra at vel purus sed tristique elementum tincidunt
            viverra.
          </p>
          <p className="text-gray-600 leading-9 text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 ">
          {/* <div className="mx-auto max-w-7xl relative">
            <div className="w-[300px] md:w-[350px] h-[350px] bg-[#FBCB00] rounded-full ">
              <AnimatedImg
                path="/images/EllipseVisionImg.svg"
                alt="chocolate"
                direction="100"
                className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
              />
            </div>
          </div> */}
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // transition={{ duration: 1, delay: 0.1 }}
              className="bg-yellow-500 h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full"
            >
              {/* <Image
          src="/images/EllipseVisionImg.svg"
          className="ml-5 w-full h-full object-cover"
          width={500}
          height={500}
        /> */}
              <AnimatedImg
                path="/images/EllipseVisionImg.svg"
                alt="vision img"
                className="ml-5 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
