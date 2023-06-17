import Image from "next/image";
import AnimatedImg from "./AnimatedImg";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
const OurStory = () => {
  const { t } = useTranslation("common");

  return (
    <section id="OurStory">
      <div className="py-10">
        <div className="flex flex-col md:flex-row items-start cont overflow-hidden">
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <motion.div
              className="w-full md:w-[80%] h-[200px] md:h-[400px] bg-yellow-400 relative border-s rounded-e-[50%]"
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <AnimatedImg
                path="/images/RectangleSnacks 34.svg"
                alt="snacks"
                className="absolute w-full h-full -mt-5 -ml-5 object-cover"
                // direction="-100d%"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
            <h1 className=" font-inter font-bold text-3xl md:text-5xl leading-10 tracking-tighter text-[#3A8DDE] flex-none order-0 mb-5 text-center md:text-start">
              {t("ourStory")}
            </h1>
            <p className="text-gray-600 leading-9 text-xl">
              Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
              tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
              consectetur. Viverra at vel purus sed tristique elementum
              tincidunt viverra.
            </p>
            <p className="text-gray-600 leading-9 text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
              tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
