import React from "react";
import AnimatedImg from "./AnimatedImg";

const Gallaries = () => {
  return (
    <div>
      <div className="cont grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 ">
          <h1 className="font-inter font-black text-6xl leading-47 text-left text-top tracking-wide text-[#3A8DDE] mb-4">
            Gallery
          </h1>
          <p className=" leading-9 text-xl text-[#3A8DDE]">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur. Viverra at vel purus sed tristique elementum tincidunt
            viverra.
          </p>
        </div>
        <div className="col-span-12  md:col-span-8 md:ml-10">
          <div className="relative mx-auto max-w-7xl mt-10 md:mt-0">
            <div className="bg-[#FBCE00] h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[350px]  relative">
              {/* <img
                src="/images/RectangleMission 36.svg"
                className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
              /> */}
              <AnimatedImg
                path="/images/RectangleMission 36.svg"
                alt={"chocolate"}
                className="absolute bottom-[5%] left-[5%] w-full h-full object-cover"
                direction="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallaries;
