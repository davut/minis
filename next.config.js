/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  // i18n: {
  //   locales: ["en", "ru", "tm"],
  //   defaultLocale: "en",
  // },
  devServerCacheConfig: {
    enabled: false,
  },
};

module.exports = nextConfig;
