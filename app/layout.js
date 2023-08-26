"use client";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.scss";
import Cursor from "./components/Cursor";
import Popup from "./components/Popup";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="main">
      <Head>
        <title>marc lópez portfolio</title>
        <meta
          name="description"
          content="This is 
          Marc López's portfolio website, where you can check all his projects and experience."
        />
        <meta name="theme-color" content="#020b55" />
        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="./icon.ico" type="image/x-icon"/>
      </Head>
      <body>
        <section className="content">
          <Header />
          {isMobile ? <></> : <Cursor />}
          {isMobile ? <Popup /> : <></>}
          <div className="main">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
