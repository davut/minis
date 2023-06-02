import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ChevronLeft, ChevronRight } from "./Icon";
import AnimatedImg from "./AnimatedImg";

const Gallaries = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="cont grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 ">
          <h1 className="font-inter font-black text-6xl leading-47 text-left text-top tracking-wide text-[#3A8DDE] mb-4">
            {t("galleryH1")}
          </h1>
          <p className=" leading-9 text-xl text-[#3A8DDE] my-10">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur. Viverra at vel purus sed tristique elementum tincidunt
            viverra.
          </p>
          <div className="flex gap-x-5 my-10">
            <div className=" w-16 h-16 rounded-full cursor-pointer bg-[#fbce00] flex justify-center items-center">
              <ChevronLeft
                className={"text-lg text-white font-bold"}
                width="10"
                height="10"
              />
            </div>
            <div className=" w-16 h-16 rounded-full cursor-pointer bg-[#fbce00] flex justify-center items-center">
              <ChevronRight
                className={"text-lg text-white font-bold"}
                width="10"
                height="10"
              />
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-8 relative">
          {/* right images */}
          {/* start */}

          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ">
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-ehidden  shadow-md bg-[#FBCE00] hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
                  {/* <Image
                    alt="women"
                    src="/images/womanView.svg"
                    width="500"
                    height="500"
                    className=" w-72 h-96 object-cover  absolute bottom-10 left-4"
                  /> */}
                  <AnimatedImg
                    alt="women"
                    path="/images/womanView.svg"
                    // width="500"
                    // height="500"
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
                    alt="icon"
                    src="/images/RectangleMission 36.svg"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  {/* <AnimatedImg
                    alt="icon"
                    path="/images/RectangleMission 36.svg"
                    // width="500"
                    // height="500"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {" "}
                  <Image
                    alt="icon"
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
                    alt="icon"
                    src="/images/RectangleMission 36.svg"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-full bg-white bg-opacity-50 blur-sm shadow"></div>
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
