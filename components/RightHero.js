import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { quote } from "./HomePage";

const RightHero = ({ images, currentIndex }) => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
  return (
    <div className="relative">
      <div className="relative items-end">
        {/* Text on the Left */}
        <div className="flex flex-col-reverse">
          <motion.p
            initial={{ x: 100, opacity: 0, rotate: -90 }}
            whileInView={{ x: 0, opacity: 1, rotate: -90 }}
            className={`heroRightText absolute text-8xl top-[50%] text-white font-bold -rotate-90 ${
              currentLanguage == "ru" ? "-left-48" : "-left-40"
            }`}
          >
            {t("mini")}
          </motion.p>
        </div>

        {/* Image */}
        <div className="relative z-10">
          <div className="z-10">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              alt="Your Image"
              className="w-[200px] md:w-[230px] z-20"
              style={{ zIndex: 10 }}
            />
          </div>

          {/* Text on Top */}
          <div className="text-white z-0">
            <motion.p
              variants={quote}
              initial="initial"
              animate="animate"
              className="heroRightText -left-3 z-0 absolute -top-16 font-bold text-8xl"
            >
              {t("dragee")}
            </motion.p>
          </div>
        </div>
      </div>
      {/* Text on the Right */}
      <div className="flex flex-col">
        <motion.p
          key={currentIndex}
          initial={{ x: -100, opacity: 0, rotate: 90 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, rotate: 90 }}
          duration={1}
          className="heroRightText absolute rotate-90 top-[40%] left-24 text-8xl text-white font-bold"
        >
          {t(`home.h1-${currentIndex + 1}`)}
        </motion.p>
      </div>
    </div>
  );
  // return (
  //   <div className="flex items-center justify-center just">
  //     <div className="flex items-center justify-center">
  //       <motion.p
  //         className="heroRightText"
  //         variants={quote}
  //         initial="initial"
  //         animate="animate"
  //       >
  //         {t("dragee")}
  //       </motion.p>
  //       <div className="">
  //         <motion.p
  //           className={`heroRightText`}
  //           initial={{ x: 100, opacity: 0, rotate: -90 }}
  //           whileInView={{ x: 0, opacity: 1, rotate: -90 }}
  //         >
  //           {t("mini")}
  //         </motion.p>
  //       </div>

  //       <div className="w-5/12 -ml-16 lg:-ml-32 z-10">
  //         {/* <img
  //           className="object-cover"
  //           src="https://kitwind.io/assets/kometa/two-girls-phone.png"
  //           alt=""
  //         /> */}
  //         <motion.img
  //           key={images[currentIndex]}
  //           src={images[currentIndex]}
  //           initial={{ y: 100, opacity: 0 }}
  //           animate={{ y: 0, opacity: 1 }}
  //           exit={{ y: -100, opacity: 0 }}
  //           transition={{ duration: 1 }}
  //           width="500"
  //           height="500"
  //           alt="minis"
  //           className="w-[200px] md:w-[230px] z-30"
  //           // placeholder="blur"
  //           // blurDataURL="/images/yellow-minis.webp"
  //         />
  //       </div>
  //       <div className={``}>
  //         <motion.p
  //           key={currentIndex}
  //           className="heroRightText"
  //           initial={{ x: -100, opacity: 0, rotate: 90 }}
  //           animate={{ y: 0, opacity: 1 }}
  //           exit={{ y: -100, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1, rotate: 90 }}
  //           duration={1}
  //           // transition={{ delay: 1 }}
  //         >
  //           {t(`home.h1-${currentIndex + 1}`)}
  //         </motion.p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default RightHero;
