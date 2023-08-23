import Head from "next/head";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";
import Footer from "./components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="main">
      <Head>
        <link rel="shortcut icon" href="./icon.ico" />
      </Head>
      <body>
        <section className="content">
          <Header />
          {isMobile ? <></> : <Cursor />}
          <div className="main">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
