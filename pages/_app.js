import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
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
export default appWithTranslation(App);
