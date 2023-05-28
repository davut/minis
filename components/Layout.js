import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
