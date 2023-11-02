import React from "react";
import { Envelope, Facebook, Instagram } from "./Icon";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactUs = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contactUs">
      <motion.svg
        // initial={{ y: "100%", x: "-100%" }}
        // whileInView={{ y: 0, x: 0 }}
        // transition={{
        //   y: { duration: 1, yoyo: Infinity },
        //   x: { duration: 1, yoyo: Infinity },
        // }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mb-14"
      >
        <path
          fill="#f4e9d5"
          fillOpacity="1"
          d="M0,64L30,101.3C60,139,120,213,180,234.7C240,256,300,224,360,192C420,160,480,128,540,149.3C600,171,660,245,720,256C780,267,840,213,900,192C960,171,1020,181,1080,186.7C1140,192,1200,192,1260,202.7C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </motion.svg>

      <div className="bg-[#f4e9d5] pb-10">
        <div className="cont">
          <div className="flex flex-wrap justify-between gap-3">
            {/* left */}
            <div className=" w-full md:w-[45%]">
              <h1 className="font-inter font-black text-5xl md:text-6xl leading-47 text-left text-top tracking-wide text-[#863A20] mb-4">
                {t("contactUs")}
              </h1>
              <p className=" leading-9 text-xl text-[#863A20]">
                {t("contactBody")}
              </p>
              <div className="flex">
                <Link
                  target="_blank"
                  href={"https://instagram.com/datmeni.tm"}
                  className="bg-white rounded-full p-2 my-2"
                >
                  <Instagram className={"text-[#863A20]"} />
                </Link>
              </div>
            </div>
            {/* right */}
            <div className=" w-full md:w-[45%] mt-10 md:mt-0">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-[#AF6A53] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border[#863A20] focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#AF6A53] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text[#863A20] peer-focus:dark:text-[#863A20]">
                    {t("gallery.yourEmail")}
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="2"
                    className="peer block w-full appearance-none border-0 border-b border-[#AF6A53] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#863A20] focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#AF6A53] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#863A20] peer-focus:dark:text-[#863A20]">
                    {t("gallery.yourMessage")}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-md bg-[#FBCB00] px-10 py-2 text-white"
              >
                {t("gallery.send")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
