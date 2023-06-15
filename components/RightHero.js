import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";

const RightHero = () => {
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

  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.p
        className="heroRightText mb-10 absolute ml-12 -top-10 md:-top-[120px] text-7xl"
        variants={quote}
        initial="initial"
        animate="animate"
      >
        Dragee
      </motion.p>
      <motion.p
        className={`heroRightText md:top-[40%] -translate-y-[50%] rotate-90 absolute -left-20 sm:left-10  md:-left-28 text-red-400 lg:-left-20 xl:-left-1 text-9xl md:text-[160px] h-[200px] w-[250px]`}
        initial={{ x: 100, opacity: 0, rotate: -90 }}
        whileInView={{ x: 0, opacity: 1, rotate: -90 }}
      >
        {t("mini")}
      </motion.p>

      {/* <motion.img
        src="/images/m&m.png"
        alt="m&m"
        className="w-[200px] md:w-[280px] z-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      /> */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Image
          width="500"
          height="500"
          src="/images/m&m.png"
          alt="m&m"
          className="w-[200px] md:w-[280px] z-20"
          placeholder="blur"
          blurDataURL="/images/m&m.png"
        />
      </motion.div>

      <motion.p
        className="heroRightText text-8xl md:text-9xl rotate-90 absolute left-[50%] -translate-x-1/2 z-10"
        initial={{ x: -100, opacity: 0, rotate: 90 }}
        whileInView={{ x: 0, opacity: 1, rotate: 90 }}
        transition={{ delay: 0.6 }}
      >
        {t("peanut")}
      </motion.p>
    </div>
  );
};

export default RightHero;
