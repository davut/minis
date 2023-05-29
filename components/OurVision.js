import Image from "next/image";
import React from "react";
import AnimatedImg from "./AnimatedImg";

const OurVision = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-start cont">
        {/* left */}
        <div className="w-full md:w-1/2 relative">
          {/* <Image
            width="500"
            height="500"
            src="/images/GroupEyes.svg"
            className="w-20"
          /> */}
          <AnimatedImg
            path="/images/GroupEyes.svg"
            alt="eye logo"
            className=" w-10"
            direction="-100"
          />
          <h1 className=" font-inter font-bold text-3xl md:text-5xl leading-10 tracking-tighter text-[#3A8DDE] flex-none order-0 mb-5 text-center md:text-start">
            Vision
          </h1>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8"></div>
      </div>
    </div>
  );
};

export default OurVision;
