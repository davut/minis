// next-i18next.config.js
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "tu"],
  },
  localePath: path.resolve("public/locales"),
  // localeSubpaths: {
  //   en: "en",
  //   ru: "ru",
  //   tu: "tu",
  // },
};
