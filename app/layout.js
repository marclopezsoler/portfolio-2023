"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroTitle from "./components/IntroTitle";
import Popup from "./components/Popup";
import "./globals.scss";

const RootLayout = ({ children }) => {
  const [loads, setLoads] = useState(0);

  useEffect(() => {
    let count = sessionStorage.getItem("intro");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("intro", count);

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
          
          {loads >= 1 ? <Header late={true} /> : <Header late={false} />}
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
