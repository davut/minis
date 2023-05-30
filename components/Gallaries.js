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
        {/* right images */}
        <div className="col-span-12  md:col-span-8 md:ml-10 flex flex-wrap">
          <div className="relative mx-auto max-w-7xl">
            <div className="bg-[#FBCE00] h-[250px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px]  relative">
              <AnimatedImg
                path="/images/RectangleMission 36.svg"
                alt={"chocolate"}
                className="absolute bottom-[5%] left-[5%] w-full h-full object-cover"
                direction="100"
              />
            </div>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <AnimatedImg
              path="/images/RectangleMission 36.svg"
              alt={"chocolate"}
              className="bg-[#FBCE00] h-[250px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px] object-cover"
              direction="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallaries;
