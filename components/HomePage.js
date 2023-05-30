import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { Font } from "next/font/google";
import { motion } from "framer-motion";
import AnimatedImg from "./AnimatedImg";

// const font = Font.load("SF Pro Display");

const Nut = ({ src, className }) => {
  const quote = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={quote}
      initial="initial" // Set initial state to "initial"
      animate="animate"
    >
      <Image width={"700"} height={"700"} src={src} className={className} />
    </motion.div>
  );

  // return (
  // <div
  //   width={"700"}
  //   height={"700"}
  //   className={`${className} bg-[url(/images/pngwing 3-1.svg)]`}
  // style={{
  //   backgroundImage: `url(${src})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "fixed",
  //   width: "100%",
  // }}
  // >
  //   rrrrr
  // </div>
  // );
};

const HomePage = () => {
  // const myClass = css`
  //   font-family: var(--font-sf-pro-display);
  // `;

  const { t } = useTranslation("common");

  return (
    <>
      <div className="heroPage w-full h-full overflow-hidden relative">
        <div className="cont mt-5 flex items-center justify-center flex-wrap h-full relative">
          {/* left hero */}
          <div className="w-full md:w-[50%] relative">
            {" "}
            <h1 className="text-sf-pro-display font-medium text-40 text-56 leading-140 text-white">
              <span className="text-sf-pro-display font-extrabold  text-[80px] leading-85 text-[#863A20]">
                {t("home.h1")}
              </span>
              has it
              <p className="w-full md:w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
                tristique elementum tincidunt viverra.
              </p>
            </h1>
          </div>
          {/* right hero */}
          <div className=" w-full md:w-[50%] h-[500px] FlexCenter relative mt-20">
            <Nut
              src={"/images/pngwing 3-1.svg"}
              className={
                "absolute w-[120px] h-[185px] top-0 left-0 rounded-l-[16px] rotate-[106px]"
              }
            />
            <Nut
              src={"/images/pngwing 4.svg"}
              className={
                "absolute w-[120px] h-[185px] -top-[35%] left-0 rounded-l-[16px] rotate-[106px]"
              }
            />
            <Nut
              src={"/images/pngwing 10.svg"}
              className={
                "absolute w-20 h-20 -top-[30%] left-30 rounded-r-[37px] rotate-[106px]"
              }
            />
            <Nut
              src={"/images/pngwing 8.svg"}
              className={
                "absolute w-[163px] h-[185px] bottom-10 left-0 rounded-r-[34px] rotate-[75px]"
              }
            />
            <Nut
              src={"/images/pngwing 2.svg"}
              className={
                "absolute w-[104px] h-[123px] -top-10 left-24 rounded-r-[34px] rotate-[75px] blur-[05]"
              }
            />
            <p className="heroRightText mb-10 absolute ml-12 -top-5 text-7xl">
              Dragee
            </p>
            <p className="heroRightText -rotate-90 absolute -left-20 xl:left-5 text-9xl">
              Mini
            </p>
            {/* <Image
              src="/images/m&m.png"
              width="700"
              height="700"
              className="w-[180px] absolute"
            /> */}{" "}
            <div>
              <motion.img
                src="/images/m&m.png"
                initial={{
                  opacity: 0,
                  x: 700,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileInView={true}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              />
            </div>
            <p className="heroRightText text-8xl rotate-90 absolute left-[45%]">
              Peanut
            </p>
          </div>
        </div>
        <Nut
          src={"/images/pngwing 1.svg"}
          className={
            "absolute w-[174px] h-[199px] top-10 -right-2 rounded-r-[34px] rotate-[75px] blur-[05]"
          }
        />
        <Nut
          src={"/images/pngwing 7.svg"}
          className={
            "absolute w-[113px] h-[133px] bottom-20 -right-2 rounded-r-[34px] rotate--25"
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=" md:-mt-20 "
      >
        <path
          fill="#facb00"
          fillOpacity="1"
          d="M0,160L30,165.3C60,171,120,181,180,170.7C240,160,300,128,360,138.7C420,149,480,203,540,192C600,181,660,107,720,90.7C780,75,840,117,900,154.7C960,192,1020,224,1080,202.7C1140,181,1200,107,1260,96C1320,85,1380,139,1410,165.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <Nut
        src={"/images/pngwing 3-1.svg"}
        className={
          "absolute w-[200px] h-[123px] -bottom-10 right-[200px]  rotate-[75px]"
        }
      />
    </>
  );
};

export default HomePage;

// const montserrat = Montserrat({
//   weight: ["400", "600"],
//   subsets: ["latin"],
//   // variable: "--font-montserrat",
// });
