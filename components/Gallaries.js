import React from "react";
import AnimatedImg from "./AnimatedImg";
import Image from "next/image";

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
        <div className=" col-span-12 md:col-span-8 relative">
          {/* right images */}
          {/* start */}

          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ">
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-ehidden  shadow-md bg-[#FBCE00] hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
                  <Image
                    src="/images/womanView.svg"
                    width="500"
                    height="500"
                    className=" w-72 h-96 object-cover  absolute bottom-10 left-4"
                  />
                  <button className="absolute top-[50%] left-[50%] text-xl text-white z-20">
                    View
                  </button>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src="/images/RectangleMission 36.svg"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {" "}
                  <Image
                    src="/images/RectangleMission 36.svg"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {" "}
                  <Image
                    src="/images/RectangleMission 36.svg"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 lefft w-20 h-40-0 right-0 bottom-0 bg-white bg-opacity-80 rodunded-full p-2"></div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Gallaries;
{
  /* <div> */
}
{
  /* <div className="relative mx-auto max-w-7xl col-span-12 md:col-span-3 lg:col-span-3">
            <div className="bg-yellow-500 relative">
              <AnimatedImg
                path="/images/RectangleMission 36.svg"
                alt={"chocolate"}
                className=" h-[250px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px] object-cover absolute"
                direction="100"
              />
            </div>
          </div> */
}

{
  /* <div className="relative mx-auto max-w-7xl col-span-12 md:col-span-3 lg:col-span-4 ">
            <AnimatedImg
              path="/images/RectangleMission 36.svg"
              alt={"chocolate"}
              className=" h-[250px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px] object-cover"
              direction="100"
            />
          </div> */
}
{
  /* <div className="relative mx-auto max-w-7xl col-span-12 md:col-span-3 lg:col-span-4">
            <AnimatedImg
              path="/images/RectangleMission 36.svg"
              alt={"chocolate"}
              className=" h-[250px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px] object-cover"
              direction="100"
            />
          </div> */
}
// </div>;
