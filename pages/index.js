import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import HomePage from "@/components/HomePage";
import OurStory from "@/components/OurStory";
import OurVision from "@/components/OurVision";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { t } = useTranslation("common");

  return (
    <main>
      {/* hello world {t("navbar.about")} */}
      <HomePage />
      <OurStory />
      <OurVision />
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
