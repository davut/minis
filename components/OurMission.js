import Image from "next/image";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import { AnimatedText } from "./AnimatedText";

const OurMission = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-start justify-between contLg">
        {/* left */}
        <div className="w-full md:w-1/2 relative">
          {/* <div className="w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FBCB00] ">
         
            <AnimatedImg
              path="/images/RectangleMission 36.svg"
              alt={"chocolate"}
              className="ml-3 -mb-3"
              direction="100%"
            />
          </div> */}
          <div className="relative mx-auto max-w-7xl">
            <div className="bg-yellow-500 h-[70vh] rounded-lg relative">
              {/* <img
                src="/images/RectangleMission 36.svg"
                className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
              /> */}
              <AnimatedImg
                path="/images/RectangleMission 36.svg"
                alt={"chocolate"}
                className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
                direction="100"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <AnimatedImg
            path="/images/missionSvg.svg"
            alt="eye logo"
            className=" w-9 mb-3"
            style={{ width: "16px" }}
            direction="-100"
          />

          <h1
            className=" font-inter font-extrabold text-3xl md:text-5xl leading-10 tracking-tighter text-[#FBCB00] flex-none order-0 mb-5 text-center md:text-start #863A20
"
          >
            <AnimatedText text="Mission" direction="left" />
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
      </div>
    </div>
  );
};

export default OurMission;
