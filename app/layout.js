"use client";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";
import "./globals.scss";

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
        <link rel="manifest" href="./manifest.webmanifest" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap" as="style" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap" media="print" onload="this.media='all'" />
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap" />
        </noscript>

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" as="style" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" media="print" onload="this.media='all'" />
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" />
        </noscript>

        <script href="components/gtag.js"></script>
        <script src="components/ga-config.js"></script>

      </Head>
      <body>
        <section className="content">
          {isMobile ? <Popup /> : <Cursor />}
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
