import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { quote } from "./HomePage";

const RightHero = () => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  return (
    <div className="flex items-center justify-center just">
      <div className="flex items-center justify-center">
        <motion.p
          className="heroRightText  absolute -top-10 ml-10 md:-top-[70px] text-7xl"
          variants={quote}
          initial="initial"
          animate="animate"
        >
          Dragee
        </motion.p>
        <div className="w-2/5 lg:-mr-0 mt-4 -mt-[50%] translate-y-1/2">
          <motion.p
            className={`heroRightText  -translate-y-[50%] rotate-90 text-9xl md:text-[160px] `}
            initial={{ x: 100, opacity: 0, rotate: -90 }}
            whileInView={{ x: 0, opacity: 1, rotate: -90 }}
          >
            {t("mini")}
          </motion.p>
        </div>

        <div className="w-5/12 -ml-16 ldg:-ml-32 z-10">
          {/* <img
            className="object-cover"
            src="https://kitwind.io/assets/kometa/two-girls-phone.png"
            alt=""
          /> */}
          <Image
            width="500"
            height="500"
            src="/images/m&m.png"
            alt="m&m"
            className="w-[200px] md:w-[230px] z-30 shadow"
            placeholder="blur"
            blurDataURL="/images/m&m.png"
          />
        </div>
        <div
          className={`w-2/5 ${
            currentLanguage === "en"
              ? "-ml-16"
              : currentLanguage === "ru"
              ? "-ml-[100px]"
              : "-ml-[80px]"
          } ${currentLanguage === "en" ? "sm:-ml-[120px]" : "sm:-ml-[120px]"} ${
            currentLanguage === "en"
              ? "md:-ml-[70px]"
              : currentLanguage === "ru"
              ? "md:-ml-[120px]"
              : ""
          } ${
            currentLanguage === "en"
              ? "lg:-ml-[80px]"
              : currentLanguage === "ru"
              ? "lg:-ml-[130px]"
              : "lg:-ml-[100px]"
          }  ${
            currentLanguage === "en"
              ? "xl:-ml-[70px]"
              : currentLanguage === "ru"
              ? "xl:-ml-[130px]"
              : "xl:-ml-[100px]"
          } -mt-[50%] translate-y-1/2 lg:-mr-7 `}
        >
          <motion.p
            className="heroRightText h-[100px] text-8xl md:text-8xl rotate-900 -translate-x-1/2  md:text-[160px] text-center  lg:text-[120px]"
            initial={{ x: -100, opacity: 0, rotate: 90 }}
            whileInView={{ x: 0, opacity: 1, rotate: 90 }}
            transition={{ delay: 0.6 }}
          >
            {t("peanut")}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default RightHero;
