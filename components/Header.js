import Link from "next/link";
import React, { useState } from "react";
// import Logo from "./Logo";
// import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

// import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();
  //   console.log(pathname);

  return (
    <Link
      href={href}
      className={`${className} relative group w-78 font-sfprodisplay font-normal text-[15px]  leading-24 text-gray-600 ${
        asPath === href
          ? "font-bold text-[15px] leading-24 text-yellow-500"
          : ""
      }`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-[#FAC800] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         dark:bg-light
      ${asPath === href ? "w-full " : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  //   const [mode, setmode] = UseThemesSwitcher();
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full py-1  dark:text-light border-b-[1px] border-transparent">
        <div className="cont font-medium flex items-center justify-between py-4 relative">
          <div>
            <Image
              src="/images/Vector.svg"
              width={300}
              height={300}
              alt="logo"
              className="w-20 bg-black"
            />
          </div>
          {/* toggle */}
          <button
            className="flex flex-col justify-center items-center lg:hidden fddixed z-50"
            onClick={handleClick}
          >
            <span
              className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                isOpen ? "-rotate-45 -translate-y-1" : " translate-y-0.5"
              } `}
            ></span>
          </button>

          {/* Desktop nav */}
          <div className=" justify-between items-center hidden lg:flex">
            <nav className=" mr-16">
              <CustomLink
                href="/about"
                title="About us"
                className="mx-2 font-bold text-[15px] leading-24 text-yellow-500"
              />
              <CustomLink href="/products" title="Products" className="mx-2" />
              <CustomLink href="/gallery" title="Gallery" className="mx-2" />
              <CustomLink href="/contact" title="Contact us" className="mx-2" />
            </nav>
            <div className="flex  items-center">
              <p className=" leading-24 text-gray-600 font-bold text-[16px] mr-2">
                EN
              </p>
              <Image
                src="/images/VectorLanguage.svg"
                width="700"
                height="700"
                className="w-5"
              />
            </div>
          </div>

          {/* Mobile nav */}
          {isOpen ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2
           bg-dark/90 backdrop-blur-md py-32 lg:hidden `}
            >
              <nav
                className="flex flex-col justify-center items-center text-light/75"
                onClick={() => setisOpen(false)}
              >
                <CustomLink
                  href="about"
                  title="About us
"
                  className="m-2 text-white font-bold text-[15px] leading-24 text-yellow-500"
                />
                <CustomLink
                  href="/products"
                  title="Products"
                  className="m-2 text-white"
                />
                <CustomLink
                  href="/gallery"
                  title="Gallery"
                  className="m-2 text-white"
                />
                <CustomLink
                  href="/contact"
                  title="Contact us"
                  className="m-2 text-white"
                />
              </nav>
            </motion.div>
          ) : null}
        </div>

        {/* <ShowIcon /> */}
      </div>
    </>
  );
};

export default Header;

// hounorabl maroof from lalupon
