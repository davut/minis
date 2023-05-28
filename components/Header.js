import Link from "next/link";
import React, { useState } from "react";
// import Logo from "./Logo";
// import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();
  //   console.log(pathname);

  return (
    <Link
      href={href}
      className={`${className} relative group w-78 h-24 font-sfprodisplay font-normal text-20  leading-24 text-gray-600`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         dark:bg-light
      ${
        asPath === href
          ? "w-full font-bold text-20 leading-24 text-yellow-500"
          : "w-0"
      }
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
            <img src="/images/Group.png" alt="" />
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
          <div className="w-fulfl justify-between items-center hidden lg:flex">
            <nav>
              <CustomLink href="/about" title="About us" className="mx-2" />
              <CustomLink href="/products" title="Products" className="mx-2" />
              <CustomLink href="/gallery" title="Gallery" className="mx-2" />
              <CustomLink href="/contact" title="Contact us" className="mx-2" />
            </nav>
          </div>

          {/* Mobile nav */}
          {isOpen ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2
           bg-dark/90 dark:bg-light/90 dark:text-dark/90 backdrop-blur-md py-32 lg:hidden `}
            >
              <nav
                className="flex flex-col justify-center items-center text-light/75"
                onClick={() => setisOpen(false)}
              >
                <CustomLink
                  href="/"
                  title="Home"
                  className="m-2 dark:text-dark/90"
                />
                <CustomLink
                  href="/about"
                  title="About"
                  className="m-2 dark:text-dark/90"
                />
                <CustomLink
                  href="/project"
                  title="Project"
                  className="m-2 dark:text-dark/90"
                />
                <CustomLink
                  href="/resume"
                  title="Resume"
                  className="m-2 dark:text-dark/90"
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
