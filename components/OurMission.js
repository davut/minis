import Image from "next/image";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import { AnimatedText } from "./AnimatedText";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
const OurMission = () => {
  const { t } = useTranslation("common");

  return (
    //     <div className="py-10">
    //       <div className="flex flex-col md:flex-row items-start justify-between contLg">
    //         {/* left */}
    //         <div className="w-full md:w-1/2 relative">
    //           {/* <div className="w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FBCB00] ">

    //             <AnimatedImg
    //               path="/images/RectangleMission 36.svg"
    //               alt={"chocolate"}
    //               className="ml-3 -mb-3"
    //               direction="100%"
    //             />
    //           </div> */}
    //           <div className="relative mx-auto max-w-7xl">
    //             <motion.div
    //               className="bg-yellow-500 h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-lg relative"
    //               initial={{ x: "-100%" }}
    //               animate={{ x: 0 }}
    //               transition={{ delay: 0.3, staggerChildren: 0.08 }}
    //             >
    //               {/* <img
    //                 src="/images/RectangleMission 36.svg"
    //                 className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
    //               /> */}
    //               <AnimatedImg
    //                 path="/images/RectangleMission 36.svg"
    //                 alt={"chocolate"}
    //                 className="absolute bottom-[2%] left-[2%] w-full h-full object-cover"
    //                 direction="100"
    //               />
    //             </motion.div>
    //           </div>
    //         </div>
    //         <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
    //           <div style={{ width: "50px" }}>
    //             <AnimatedImg
    //               path="/images/missionSvg.svg"
    //               alt="eye logo"
    //               className=" w-12 mb-3"
    //               style={{ width: "16px" }}
    //               direction="-100%"
    //             />
    //           </div>

    //           <h1
    //             className=" font-inter font-extrabold text-3xl md:text-5xl leading-10 tracking-tighter text-[#FBCB00] flex-none order-0 mb-5 text-center md:text-start #863A20
    // "
    //           >
    //             <AnimatedText text={t("missionH1")} direction="left" />
    //           </h1>
    //           <p className="text-gray-600 leading-9 text-xl">
    //             Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
    //             tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
    //             consectetur. Viverra at vel purus sed tristique elementum tincidunt
    //             viverra.
    //           </p>
    //           <p className="text-gray-600 leading-9 text-xl mt-4">
    //             Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
    //             tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
    //             consectetur.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between contLg">
        {/* left */}
        <div className="w-full md:relative">
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              className="h-[250px] md:h-[350px] lg:h-[400px] rounded-lg relative"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, staggerChildren: 0.08 }}
            >
              <AnimatedImg
                path="/images/mission-img.webp"
                alt="chocolate"
                className="absolute bottom-[2%] left-[2%] w-full h-full object-contain"
                direction="100"
              />
            </motion.div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col items-center md:items-start md:relative">
          <div style={{ width: "50px" }}>
            <AnimatedImg
              path="/images/mission-icon.webp"
              alt="eye logo"
              className="w-12 mb-3"
              style={{ width: "16px" }}
              direction="-100%"
            />
          </div>
          <h1 className="font-inter font-extrabold text-3xl md:text-5xl leading-10 tracking-tighter text-[#FBCB00] flex-none order-0 mb-5 text-center md:text-start #863A20">
            <AnimatedText text={t("missionH1")} direction="left" />
          </h1>
          <p className="text-gray-600 leading-9 text-xl">{t("missionBody1")}</p>
          {/* <p className="text-gray-600 leading-9 text-xl mt-4">
            {t("missionBody2")}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
