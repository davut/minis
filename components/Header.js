import Link from "next/link";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CancelIcon } from "./Icon";
import { useTranslation } from "next-i18next";
import { Logo } from "./Logo";

export const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();

  /*     ${
            asPath === href
              ? "font-bold text-[15px] leading-24 text-yellow-500"
              : ""
          } */
  /*  ${asPath === href ? "w-full font-extrabold" : "w-0 hidden"} */
  return (
    <>
      <div
        className={`${className} relative group w-78 font-sfprodisplay font-normal text-[15px] text-xl  leading-24 text-gray-600 cursor-pointer inline-block`}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-[#FAC800] w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
             dark:bg-light
            `}
        >
          &nbsp;
        </span>
      </div>
    </>
  );
};

const Header = () => {
  const { t } = useTranslation("common");
  const { locale, push, pathname, asPath, router } = useRouter();
  // console.log(t("navbar.about", locale, "mmee"));

  const [isOpen, setisOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChangeLanguage = (locale) => {
    push(pathname, asPath, { locale });
  };

  function scrollToPage(href) {
    event.preventDefault();

    const page = document.getElementById(href);

    if (page) {
      page.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const PopUpLanguage = ({ className }) => (
    <div className="flex  items-center">
      <div
        className="flex items-center relative cursor-pointer"
        onClick={togglePopup}
      >
        <p
          className={`leading-24 text-gray-600 font-bold text-[16px] mr-2 uppercase ${className}`}
        >
          {locale}
        </p>
        <div className="w-5">
          {isPopupOpen ? (
            <CancelIcon
              className={"absolute right-0 top-0 text-lg" + className}
            />
          ) : (
            <motion.img
              src="/images/VectorLanguage.svg"
              width="700"
              height="700"
              className="w-5 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          )}
        </div>
        {isPopupOpen && (
          <motion.div
            className="absolute top-0 right-0 mt-8 mr-2 bg-white rounded-lg p-4 z-50 shadow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ul className="space-y-2 ">
              <li
                className="text-gray-800 cursor-pointer"
                onClick={() => handleChangeLanguage("en")}
              >
                English
              </li>
              <li
                className="text-gray-800 cursor-pointer"
                onClick={() => handleChangeLanguage("ru")}
              >
                Russian
              </li>
              <li
                className="text-gray-800 cursor-pointer"
                onClick={() => handleChangeLanguage("tu")}
              >
                Turkmen
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* for pushing the pages under down a little bit, cause navbar have fixed and it standing on it */}
      <div className="h-[90px] bg-light"></div>
      <div className="w-full py-1  border-b-[1px] border-transparent fixed z-50 top-0 left-0 right-0 shadow glassBg">
        <div className="cont font-medium flex items-center justify-between py-4 relative">
          <div>
            <Logo />
          </div>
          {/* toggle */}
          <button
            className="flex flex-col justify-center items-center lg:hidden z-50"
            onClick={handleClick}
          >
            <span
              className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>

          {/* Desktop nav */}
          <div className=" justify-between items-center hidden lg:flex">
            <nav className=" mr-16">
              <span onClick={() => scrollToPage("OurStory")}>
                <CustomLink
                  // href="#OurStory"
                  title={t("navbar.about")}
                  className="mx-2"
                />
              </span>
              <span onClick={() => scrollToPage("OurProduct")}>
                <CustomLink title={t("navbar.products")} className="mx-2" />
              </span>
              <span onClick={() => scrollToPage("Gallary")}>
                <CustomLink title={t("navbar.gallery")} className="mx-2" />
              </span>

              <span onClick={() => scrollToPage("contactUs")}>
                <CustomLink title={t("navbar.contact")} className="mx-2" />
              </span>
            </nav>
            {/* popup large */}
            <PopUpLanguage />
          </div>
        </div>
        {/* <ShowIcon /> */}
      </div>
      {/* Mobile nav */}
      <div className="absolute top-[100%]">
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2
           bg-dark/90 backdrop-blur-md py-32 lg:hidden z-50`}
          >
            <nav
              className="flex flex-col justify-center items-center text-light/75"
              onClick={() => setisOpen(false)}
            >
              <span onClick={() => scrollToPage("OurStory")}>
                <CustomLink
                  title="About us
"
                  className="m-2 text-white font-bold text-[15px] leading-24"
                />
              </span>
              <span onClick={() => scrollToPage("OurProduct")}>
                <CustomLink title="Products" className="m-2 text-white" />
              </span>
              <span onClick={() => scrollToPage("Gallary")}>
                <CustomLink title="Gallery" className="m-2 text-white" />
              </span>

              <span onClick={() => scrollToPage("contactUs")}>
                <CustomLink
                  title="Contact us"
                  className="m-2 text-white mb-3"
                />
              </span>
            </nav>
            <PopUpLanguage className="text-white mt-2" />
          </motion.div>
        ) : null}
      </div>
    </>
  );
};
export default Header;
