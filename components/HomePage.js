import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { Font } from "next/font/google";
import { motion } from "framer-motion";

// const font = Font.load("SF Pro Display");

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

const Nut = ({ src, className, index }) => {
  const delay = index * 0.2; // Adjust the delay value as needed
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
    >
      <div className={className}>
        {/* <Image width={120} height={185} src={} /> */}
        <Image width={"300"} height={"300"} src={src} alt={"peanut image"} />
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  // const myClass = css`
  //   font-family: var(--font-sf-pro-display);
  // `;

  const { t } = useTranslation("common");

  return (
    <div className="overflow-hidden ">
      <div className="heroPage w-full h-full overflow-hidden relative pt-20">
        <div className="cont mt-5 flex items-center justify-center flex-wrap h-full relative">
          {/* left hero */}
          <div className="w-full md:w-[50%] relative">
            {" "}
            <motion.h1
              className="text-sf-pro-display font-medium text-2xl md:text-[40px] lg:text-[56px] leading-140 text-white leading-normal  "
              variants={quote}
              initial="initial"
              animate="animate"
            >
              <span className="text-sf-pro-display font-extrabold  text-[80px] leading-85 text-[#863A20]">
                {t("home.h1")}
              </span>
              <span className=" inline-block">has it</span>
              <p className="w-full md:w-[90%] text-2xl leading-normal">
                Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
                tristique elementum tincidunt viverra.
              </p>
            </motion.h1>
          </div>
          {/* right hero */}
          <div className="w-full md:w-[50%] h-[500px] FlexCenter relative mt-28 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, type: "fade" }}
              className="hidden md:block"
            >
              <Image
                width="500"
                height="500"
                src="/images/heroLine.svg"
                className="absolute -left-36 lg:-left-20 md:-top-14 w-40 lg:w-56 z-20"
              />
            </motion.div>
            <Nut
              src={"/images/pngwing 3-1.svg"}
              className={
                "absolute w-[120px] h-[185px] top-0 left-0 rounded-l-[16px] rotate-[106px]"
              }
              index={0}
            />
            <Nut
              src={"/images/pngwing 4.svg"}
              className={
                "absolute w-[120px] h-[185px] -top-[24%] -left-20 rounded-l-[16px] rotate-[106px]"
              }
              index={1}
            />
            <Nut
              src={"/images/pngwing 10.svg"}
              className={
                "absolute w-20 h-20 -top-[24%] left-30 rounded-r-[37px] rotate-[106px]"
              }
              index={2}
            />
            <Nut
              src={"/images/pngwing 8.svg"}
              className={
                "absolute w-[163px] h-[185px] bottom-10 left-0 rounded-r-[34px] rotate-[75px]"
              }
              index={3}
            />
            <Nut
              src={"/images/pngwing 2.svg"}
              className={
                "absolute w-[104px] h-[123px] -top-10 left-24 rounded-r-[34px] rotate-[75px] blur-[05]"
              }
              index={4}
            />
            <motion.p
              className="heroRightText mb-10 absolute ml-12 -top-16 text-7xl"
              variants={quote}
              initial="initial"
              animate="animate"
            >
              Dragee
            </motion.p>

            <motion.p
              // sm:-left-4 md:-left-40 lg:-left-20 xl:-left-12
              className="heroRightText -rotate-90 absolute - sm:-left-4 md:-left-40 lg:-left-20 xl:-left-14 text-9xl md:text-[160px] "
              initial={{ x: 100, opacity: 0, rotate: -90 }}
              whileInView={{ x: 0, opacity: 1, rotate: -90 }}
              // transition={{ duration: 1, delay: 0.1 }}
            >
              {t("mini")}
            </motion.p>
            <div className=" z-20">
              <motion.img
                src="/images/m&m.png"
                alt="m&m"
                // initial={{
                //   opacity: 0,
                //   x: 700,
                // }}
                // animate={{
                //   opacity: 1,
                //   x: 0,
                // }}
                // whileInView={true}
                // transition={{
                //   type: "spring",
                //   stiffness: 260,
                //   damping: 20,
                // }}
                className="w-[220px] z-10"
              />
            </div>
            <motion.p
              className="heroRightText text-8xl md:text-9xl rotate-90 absolute left-[48%] md:left-[40%] z-10"
              initial={{ x: -100, opacity: 0, rotate: 90 }}
              whileInView={{ x: 0, opacity: 1, rotate: 90 }}
              transition={{ delay: 0.6 }}
            >
              {t("peanut")}
            </motion.p>
          </div>
        </div>
        {/* </div> */}
        <Nut
          src={"/images/pngwing 1.svg"}
          className={
            "absolute w-[174px] h-[199px] top-10 -right-10 rounded-r-[34px] rotate-[75px] blur-[05]"
          }
          index={1}
        />
        <Nut
          src={"/images/pngwing 7.svg"}
          className={
            "absolute w-[113px] h-[133px] bottom-20 -right-2 rounded-r-[34px] rotate--25"
          }
          index={0}
        />
      </div>
      <motion.svg
        // initial={{ x: "-100%" }}
        // whileInView={{ y: 0, x: 0 }}
        // transition={{
        //   // y: { duration: 1, yoyo: Infinity },
        //   x: { duration: 1, yoyo: Infinity },
        // }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="md md:-mt-16 "
      >
        <path
          fill="#facb00"
          fillOpacity="1"
          d="M0,160L30,165.3C60,171,120,181,180,170.7C240,160,300,128,360,138.7C420,149,480,203,540,192C600,181,660,107,720,90.7C780,75,840,117,900,154.7C960,192,1020,224,1080,202.7C1140,181,1200,107,1260,96C1320,85,1380,139,1410,165.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </motion.svg>
      <Nut
        src={"/images/pngwing 3-1.svg"}
        className={
          "absolute w-[200px] h-[123px] -bottom-0 right-[200px]  rotate-[75px]"
        }
        index={1}
      />
    </div>
  );
};

export default HomePage;

// const montserrat = Montserrat({
//   weight: ["400", "600"],
//   subsets: ["latin"],
//   // variable: "--font-montserrat",
// });
