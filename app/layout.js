import Head from "next/head";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="main">
      <Head>
        <link rel="shortcut icon" href="./icon.ico" />
      </Head>
      <body>
        <Header />
        {isMobile ? <></> : <Cursor />}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
