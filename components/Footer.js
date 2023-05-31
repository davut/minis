import { useTranslation } from "next-i18next";
import { CustomLink } from "./Header";
import { Logo } from "./Logo";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto py-7">
        <div className="flex flex-wrap items-center justify-between cont">
          <div className="flex items-center">
            <Logo className="mr-2" />
            <p className="text-sm">
              © Mini {currentYear} − All rights reserved
            </p>
          </div>

          <nav className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap">
              <li>
                <CustomLink
                  href="/"
                  title={t("navbar.about")}
                  className="mr-4"
                />
              </li>
              <li>
                <CustomLink
                  href="/products"
                  title={t("navbar.products")}
                  className="mr-4"
                />
              </li>
              <li>
                <CustomLink
                  href="/gallery"
                  title={t("navbar.gallery")}
                  className="mr-4"
                />
              </li>
              <li>
                <CustomLink
                  href="/contact"
                  title={t("navbar.contact")}
                  className="mr-4"
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
