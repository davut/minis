import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "./Icon";
import { useTranslation } from "next-i18next";

const OurProduct = () => {
  const { t } = useTranslation("common");

  let product = [
    {
      img: "/images/ad 1.svg",
      name: t("ourProductB"),
      desc: "Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed .",
      color: "bg-[#3A8DDE]",
    },
    {
      img: "/images/chcolateImg.svg",
      name: t("ourProductC"),
      desc: "Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed .",
      color: "bg-[#5E2A2B]",
    },
    {
      img: "/images/chocolateYello.svg",
      name: t("ourProductA"),
      desc: "Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed .",
      color: "bg-[#FACD00]",
    },
  ];
  return (
    <>
      <div className="bg-[#f4e9d5] py-36 overflow-hidden">
        {/* */}

        <div className="cont flex justify-center items-center gap-x-6 flex-wrap">
          {product.map((elem, i) => (
            <div
              key={i}
              className={`py-10 px-7 rounded-lg ${elem.color} relative lg:flex-1 flex flex-col justify-center items-center mt-20 w-96 my-20`}
            >
              {/* <div className="flex justify-between">*/}
              <div className="absolute left-0 md:left-2 lg:left-10 top-20 rounded-2xl">
                {" "}
                <ChevronLeft
                  className={"text-3xl text-white font-bold  cursor-pointer "}
                />
              </div>
              <Image
                width={"300"}
                height={"300"}
                src={elem.img}
                className=" w-36 -mt-[50%]"
              />
              <div className="absolute right-0 md:right-2 lg:right-10 top-20">
                <ChevronRight
                  className={"text-3xl text-white font-bold  cursor-pointer"}
                />
              </div>
              {/* </div> */}
              <h2 className="font-inter font-bold text-3xl leading-47 text-white my-5">
                {elem.name}
              </h2>
              <p className="text-white leading-9 text-lg text-center">
                {elem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=" -mt-9 md:-mt-12"
      >
        <path
          fill="#f4e9d5"
          fillOpacity="1"
          d="M0,128L20,106.7C40,85,80,43,120,42.7C160,43,200,85,240,122.7C280,160,320,192,360,202.7C400,213,440,203,480,186.7C520,171,560,149,600,154.7C640,160,680,192,720,186.7C760,181,800,139,840,122.7C880,107,920,117,960,144C1000,171,1040,213,1080,208C1120,203,1160,149,1200,144C1240,139,1280,181,1320,213.3C1360,245,1400,267,1420,277.3L1440,288L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default OurProduct;
