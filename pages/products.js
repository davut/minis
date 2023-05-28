import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const products = () => {
  const { t } = useTranslation("products");

  return <div>products {t("home.h1")} </div>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["products"])),
      // Will be passed to the page component as props
    },
  };
}

export default products;
