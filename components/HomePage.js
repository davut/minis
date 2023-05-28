import { useTranslation } from "next-i18next";
import React from "react";

const HomePage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="heroPage w-full h-full md:h-screen">
      <div className="cont mt-5">
        {/* left hero */}
        <div>
          {" "}
          <h1>{t("home.h1")}</h1>
        </div>
        {/* right hero */}
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
