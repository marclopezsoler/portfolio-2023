"use client";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.scss";
import Cursor from "./components/Cursor";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [loads, setLoads] = useState(0);

  useEffect(() => {
    let count = sessionStorage.getItem("name");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("name", count);

    setLoads(count);
  }, []);

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
        <link rel="manifest" href="./manifest.webmanifest" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
      </Head>
      <body>
        <section className="content">
          <div className={`intro_title ${loads >= 1 ? 'animate_bg' : 'hide'}`}>
            <p className={loads === 1 ? 'animate_title1' : 'hide'}>marc</p>
            <p className={loads === 1 ? 'animate_title2' : 'hide'}>lópez</p>
          </div>
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
