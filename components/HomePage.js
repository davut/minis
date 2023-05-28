import { useTranslation } from "next-i18next";
import React from "react";

const HomePage = () => {
  const { t } = useTranslation("common");

  return <div>{t("navbar.about")}</div>;
};

export default HomePage;
