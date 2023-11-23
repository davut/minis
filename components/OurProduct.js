import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "./Icon";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import AnimatedImg from "./AnimatedImg";

const OurProduct = () => {
  const { t } = useTranslation("common");

  let product = [
    {
      img: "/images/blue-minis.webp",
      name: t("ourProductB"),
      desc: t("crispyDragee"),
      color: "bg-[#3A8DDE]",
      delay: 0.1,
    },
    {
      img: "/images/choco-minis.webp",
      name: t("ourProductC"),
      desc: t("chocolateDragee"),
      color: "bg-[#5E2A2B]",
      delay: 0.2,
    },
    {
      img: "/images/yellow-minis.webp",
      name: t("ourProductA"),
      desc: t("peanutDragee"),
      color: "bg-[#FACD00]",
      delay: 0.3,
    },
  ];
  return (
    <section id="OurProduct" className="-mb-1">
      <div className="bg-[#f4e9d5] py-36">
        {/* */}

        <div className="cont flex justify-center items-center gap-x-6 flex-wrap">
          {product.map((elem, i) => (
            <div
              key={i}
              className={`py-10 px-7 rounded-[20px] h-[595px] ${elem.color} relative lg:flex-1 flex flex-col justify-center items-center mt-20 w-96 my-20`}
            >
              {/* <div className="flex justify-between">*/}
              <div className="absolute left-0 md:left-2 lg:left-10 top-20 rounded-2xl">
                {" "}
                <ChevronLeft
                  className={"text-3xl text-white font-bold  cursor-pointer "}
                />
              </div>
              <motion.img
                width={"300"}
                height={"300"}
                src={elem.img}
                className=" w-36 -mt-[50%]"
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: elem.delay }}
              />
              {/* <AnimatedImg
                path={elem.img}
                alt={elem.name}
                className=" w-36 -mt-[50%]"
              /> */}
              <div className="absolute right-0 md:right-2 lg:right-10 top-20">
                <ChevronRight
                  className={"text-3xl text-white font-bold  cursor-pointer"}
                />
              </div>
              {/* </div> */}
              <h2 className="font-inter font-bold text-3xl leading-47 text-white my-5 text-center">
                {elem.name}
              </h2>
              <p className="text-white leading-9 text-xm md:text-lg text-center">
                {elem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f4e9d5] h-20"></div>
      <div className="z-10 overflow-x-hidden -mt-8 md:-mt-10 lg:-mt-20">
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
          className={"w-[200%]"}
          viewBox="0 0 2880 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1556.04 0.237251C1504.82 -2.16275 1457.34 14.2372 1440 22.7372V78.7374H2880V22.7372C2864.83 18.7373 2824.68 13.1373 2785.47 22.7372C2736.45 34.7372 2718.44 41.2373 2622.41 41.2373C2526.38 41.2373 2497.37 67.2373 2421.34 62.7373C2345.31 58.2373 2310.3 22.7372 2246.28 22.7372C2182.26 22.7372 2150.01 31.652 2020.7 54.7373C1896 77 1881.86 -17.2628 1798.5 22.7372C1715.14 62.7373 1620.06 3.23725 1556.04 0.237251Z"
            fill="white"
          />
          <path
            d="M116.04 0.237251C64.8225 -2.16275 17.3394 14.2372 0 22.7372V78.7374H1440V22.7372C1424.83 18.7373 1384.68 13.1373 1345.47 22.7372C1296.45 34.7372 1278.44 41.2373 1182.41 41.2373C1086.38 41.2373 1057.37 67.2373 981.341 62.7373C905.314 58.2373 870.302 22.7372 806.28 22.7372C742.258 22.7372 710.011 31.652 580.702 54.7373C456 77 441.863 -17.2628 358.5 22.7372C275.137 62.7373 180.063 3.23725 116.04 0.237251Z"
            fill="white"
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default OurProduct;
