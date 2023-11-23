import { useTranslation } from "next-i18next";
import { CustomLink } from "./Header";
import { Logo } from "./Logo";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="py-7">
        <div className="flex flex-wrap items-center justify-between cont">
          <div className="flex items-center">
            <Logo className="mr-2" />
            <p className="text-sm">
              © Mini {currentYear} − All rights reserved
            </p>
          </div>

          <nav className="mt-4 sm:mt-0">
            <ul className="flex justify-center items-center flex-wrap">
              <li>
                <CustomLink
                  href="/"
                  title={t("navbar.about")}
                  className="mx-5"
                />
              </li>
              <li>
                <CustomLink
                  href="/products"
                  title={t("navbar.products")}
                  className="mx-5"
                />
              </li>
              <li>
                <CustomLink
                  href="/gallery"
                  title={t("navbar.gallery")}
                  className="mx-5"
                />
              </li>
              <li>
                <CustomLink
                  href="/contact"
                  title={t("navbar.contact")}
                  className="ml-5"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
