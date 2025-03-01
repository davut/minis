import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import HomePage from "@/components/HomePage";
import OurStory from "@/components/OurStory";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import OurProduct from "@/components/OurProduct";
import Gallaries from "@/components/Gallaries";
import Catalog from "@/components/Catalog";
import ContactUs from "@/components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { t } = useTranslation("common");

  return (
    <main>
      {/* hello world {t("navbar.about")} */}
      <HomePage />
      <OurStory />
      <OurVision />
      <OurMission />
      <OurProduct />
      <Catalog />
      <Gallaries />
      <ContactUs />
      {/* <Testing /> */}
    </main>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
