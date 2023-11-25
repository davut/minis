import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Font } from "next/font/google";
import { color, motion, useMotionValue, useTransform } from "framer-motion";
import RightHero from "./RightHero";
import LeftNav from "./RightHero";

// const font = Font.load("SF Pro Display");

export const quote = {
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

const HomePage = () => {
  // const myClass = css`
  //   font-family: var(--font-sf-pro-display);
  // `;

  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  const [bgColors, setBgColors] = useState(["#FBCB00", "#5E2A2B", "#3A8DDE"]);
  const [currentBgColor, setCurrentBgColor] = useState(0);

  // const backgroundColor = useMotionValue(bgColors[currentBgColor]);
  // const x = useMotionValue(0);
  // const background = useTransform(
  //   x,
  //   [0, 1, 2],
  //   ["#FBCB00", "#5E2A2B", "#3A8DDE"]
  // );
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const textColors = ["#5E2A2B", "#FBCB00", "#FBCB00"];
  const texts = ["Peanut", "Crispy", "Chocolate"];
  const images = [
    "/images/yellow-minis.webp",
    "/images/choco-minis.webp",
    "/images/blue-minis.webp",
  ];

  return (
    <div className="overflow-hidden ">
      <motion.div
        transition={{ duration: 1 }}
        animate={{ backgroundColor: bgColors[colorIndex] }}
        style={{ backgroundColor: bgColors[colorIndex] }}
        className={`w-full h-full overflow-hidden relative pt-20`}
      >
        <div className="cont mt-5 flex flex-col md:flex md:flex-col lg:flex-row items-center justify-center h-full relative gap-x-10">
          {/* left hero */}
          <div className="w-full relative">
            {" "}
            <motion.h1
              className="text-sf-pro-display font-medium text-2xl md:text-[40px] lg:text-[56px] leading-140 text-white leading-normal  "
              variants={quote}
              initial="initial"
              animate="animate"
            >
              <motion.span
                animate={{ color: textColors[colorIndex], opacity: 1, y: 0 }}
                key={texts[colorIndex]} // Changing the key will re-render the component, triggering the animation
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className={`text-sf-pro-display font-extrabold text-7xl leading-85 text-[${textColors[colorIndex]}]`}
              >
                {t(`home.h1-${colorIndex + 1}`)}
              </motion.span>
              {/* <span className=" inline-block">has it</span> */}
              <motion.p
                key={`homeMainBody-${colorIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-[90%] pb-24 text-2xl leading-normal"
              >
                {t(`homeMainBody-${colorIndex + 1}`)}
              </motion.p>
            </motion.h1>
          </div>
          {/* right hero */}
          <div className="w-full h-[500px] FlexCenter relative ">
            <RightHero images={images} currentIndex={colorIndex} />
          </div>
        </div>
      </motion.div>
      <motion.div
        transition={{ duration: 1 }}
        animate={{ backgroundColor: bgColors[colorIndex] }}
        style={{ backgroundColor: bgColors[colorIndex] }}
        className={`h-20`}
      ></motion.div>
      <motion.svg
        initial={{ x: "-50%" }}
        // whileInView={{ y: 0, x: 0 }}
        animate={{ x: "0%" }}
        transition={{
          // y: { duration: 1, yoyo: Infinity }f,
          // x: { duration: 1, yoyo: Infinity },
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className={"z-10 w-[200%] -mt-20 md:-mt-10 lg:-mt-14 overflow-hidden"}
        viewBox="0 0 2880 60"
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
  );
};

export default HomePage;

// const montserrat = Montserrat({
//   weight: ["400", "600"],
//   subsets: ["latin"],
//   // variable: "--font-montserrat",
// });
