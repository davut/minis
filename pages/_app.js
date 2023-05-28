import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
// import translations from "../locales";
import { IntlProvider } from "react-intl";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const [locale, setLocale] = useState(router.locale);
  // const [messages, setMessages] = useState({});

  // // const messages = translations[locale];
  // useEffect(() => {
  //   setLocale(router.locale);
  //   const translations = require(`../locales/${locale}/${locale}.json`);
  //   setMessages(translations);
  // }, [router.locale]);
  return (
    // <IntlProvider locale={locale} messages={messages}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </IntlProvider>
  );
}
