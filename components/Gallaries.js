import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ChevronLeft, ChevronRight } from "./Icon";
import AnimatedImg from "./AnimatedImg";
import { motion } from "framer-motion";

const Gallaries = () => {
  const { t } = useTranslation("common");

  return (
    <div id="Gallary" className="bg-white">
      <div className="cont grid grid-cols-12 pt-10">
        <div className="col-span-12 md:col-span-4 ">
          <h1 className="font-inter font-black text-6xl leading-47 text-left text-top tracking-wide text-[#3A8DDE] mb-4">
            {t("galleryH1")}
          </h1>
          <p className=" leading-9 text-xl text-[#3A8DDE] my-10">
            {t("galleryBody")}
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
                    path="/images/minis-gallery-1.webp"
                    // width="500"
                    // height="500"
                    className=" w-72 h-96 object-cover  absolute bottom-10 left-4"
                  />
                  {/* <button className="absolute top-[50%] left-[50%] text-xl text-white z-20">
                    View
                  </button> */}
                </div>
              </div>
              <div className="inline-block px-3">
                <div className=" w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    src="/images/umbrella.webp"
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
                    src="/images/cornetto.webp"
                    width="500"
                    height="500"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* <div className="inline-block px-3">
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
              </div> */}
              <div className="absolute top-0 right-0 w-20 h-full bg-white bg-opacity-50 blur-sm shadow"></div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      <div className="overflow-hidden -mb-12 md:-mb-12 lg:-mb-16">
        <motion.svg
          initial={{ x: "-50%" }}
          // whileInView={{ y: 0, x: 0 }}
          animate={{ x: "0%" }}
          transition={{
            // y: { duration: 1, yoyo: Infinity },
            // x: { duration: 1, yoyo: Infinity },
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className={"z-10 w-[200%]"}
          width="2880"
          height="79"
          viewBox="0 0 2880 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2763.96 78.5001C2815.18 80.9001 2862.66 64.5001 2880 56.0001V-6.10352e-05H1440V56.0001C1455.17 60 1495.32 65.6 1534.53 56.0001C1583.55 44.0001 1601.56 37.5 1697.59 37.5C1793.62 37.5 1822.63 11.5 1898.66 16C1974.69 20.5 2009.7 56.0001 2073.72 56.0001C2137.74 56.0001 2169.99 47.0853 2299.3 24C2424 1.7373 2438.14 96.0001 2521.5 56.0001C2604.86 16 2699.94 75.5001 2763.96 78.5001Z"
            fill="white"
          />
          <path
            d="M1323.96 78.5001C1375.18 80.9001 1422.66 64.5001 1440 56.0001V-6.10352e-05H0V56.0001C15.1719 60 55.3192 65.6 94.5328 56.0001C143.55 44.0001 161.556 37.5 257.589 37.5C353.623 37.5 382.633 11.5 458.659 16C534.686 20.5 569.698 56.0001 633.72 56.0001C697.742 56.0001 729.989 47.0853 859.298 24C984 1.7373 998.137 96.0001 1081.5 56.0001C1164.86 16 1259.94 75.5001 1323.96 78.5001Z"
            fill="white"
          />
        </motion.svg>
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
