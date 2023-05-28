import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const CustomLinks = ({ href, title, className }) => {
  return (
    <Link href={href} className="relative group">
      <motion.span
        className={`w-78 h-24 font-sfprodisplay font-normal text-20 leading-24 text-gray-600 capitalize ${className}`}
        whileHover={{ scale: 1.1 }}
      >
        {title}
      </motion.span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bfg-gray-800">
      <div className="flex items-center">
        <motion.img
          src="/images/Vector.png"
          alt="Logo"
          className="h-8 w-auto mr-4 bg-black"
          whileHover={{ scale: 1.1 }}
        />
        {/* <motion.h1
          className="text-white text-xl font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          My Website
        </motion.h1> */}
      </div>
      <div className="flex items-center space-x-10">
        <ul className="hidden md:flex space-x-4">
          {/* <li>
            <motion.a
              href="#"
              className=" hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className=" hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
            >
              Product
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className=" hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
            >
              Gallery
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className=" hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
            >
              Contact us
            </motion.a>
          </li> */}
          <CustomLinks href={"/"} title={"Home"} className={""} />
          <CustomLinks href={"product"} title={"product"} className={""} />
          <CustomLinks href={"Gallery"} title={"Gallery"} className={""} />
          <CustomLinks
            href={"Contact us"}
            title={"Contact us"}
            className={""}
          />
        </ul>
        <motion.button
          className=" hover:text-gray-300 ml-4 hidden md:block"
          whileHover={{ scale: 1.1 }}
        >
          Language Switch
        </motion.button>
        <motion.button
          className="text-white hover:text-gray-300 ml-4 md:hidden"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
        >
          Menu
        </motion.button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 h-full w-full bg-gray-800">
          <ul className="flex flex-col items-center justify-center h-full space-y-4">
            <li>
              <motion.a
                href="#"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                Services
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.a>
            </li>
            <li>
              <motion.button
                className="text-white hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                Language Switch
              </motion.button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
