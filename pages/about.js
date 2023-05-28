import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const about = () => {
  const { t } = useTranslation("common");

  return <div>{t("about.h1")}</div>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
      // Will be passed to the page component as props
    },
  };
}

export default about;
