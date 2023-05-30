import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "./Icon";

let product = [
  {
    img: "/images/ad 1.svg",
    name: "Crispy dragee",
    desc: "Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed .",
    color: " #3A8DDE",
  },
];

const OurProduct = () => {
  return (
    <div className="bg-[#f4e9d5] py-36">
      {/* */}

      <div className="cont flex justify-center items-center gap-x-6 flex-wrap">
        {[...Array(3)].map((elem) => (
          <div className="py-10 px-7 rounded-lg bg-[#3A8DDE] relative lg:flex-1 flex flex-col justify-center items-center mt-20 w-96 my-20">
            {/* <div className="flex justify-between">*/}
            <div className="absolute left-10 top-20 rounded-2xl">
              {" "}
              <ChevronLeft
                className={"text-3xl text-white font-bold  cursor-pointer "}
              />
            </div>
            <Image
              width={"300"}
              height={"300"}
              src="/images/ad 1.svg"
              className=" w-36 -mt-[50%]"
            />
            <div className="absolute right-10 top-20">
              <ChevronRight
                className={"text-3xl text-white font-bold  cursor-pointer"}
              />
            </div>
            {/* </div> */}
            <h2 className="font-inter font-bold text-3xl leading-47 text-white my-5">
              Crispy dragee
            </h2>
            <p className="text-white leading-9 text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
              tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
              consectetur. Viverra at vel purus sed .
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
