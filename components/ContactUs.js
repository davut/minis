import React from "react";
import { Envelope, Facebook, Instagram, TikTok, WhatsApp } from "./Icon";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactUs = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contactUs">
      <div className="bg-[#FFF1D9] py-10 pt-16">
        <div className="cont">
          <div className="flex flex-wrap justify-between gap-3">
            {/* left */}
            <div className=" w-full md:w-[45%]">
              <h1 className="font-inter font-black text-5xl md:text-6xl leading-47 text-left text-top tracking-wide text-[#863A20] mb-4">
                {t("contactUs")}
              </h1>
              <p className="leading-9 text-xl text-[#863A20]">
                {t("contactBody")}
              </p>
              <p className="my-2 leading-9 text-xl text-[#863A20]">
                Adres: Jaý 8, k.Telekeçi, etrap Ak bugdaý, Anew, Türkmenistan
                <br></br>
                <a className="underline" href="tel:+99365805980">
                +99365805980
                </a>
              </p>
              <div className="flex gap-2">
                <Link
                  target="_blank"
                  href={"https://instagram.com/minis_tm"}
                  className="bg-white rounded-full p-2 my-2"
                >
                  <Instagram className={"text-[#863A20]"} />
                </Link>
                <Link
                  target="_blank"
                  href={"https://tiktok.com/@minis_tm"}
                  className="bg-white rounded-full p-2 my-2"
                >
                  <TikTok className={"text-[#863A20]"} />
                </Link>
                {/* Whatsapp */}
                <Link
                  target="_blank"
                  href={"https://wa.me/99365805980"}
                  className="bg-white rounded-full p-2 my-2"
                >
                  <WhatsApp className={"text-[#863A20]"} />
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
                className="mt-5 rounded-md bg-[#FBCB00] px-10 py-2 text-[#5E2A2B] font-bold hover:[box-shadow:2px_4px_0px_0px_#5E2917]"
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
