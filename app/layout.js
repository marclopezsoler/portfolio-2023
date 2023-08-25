"use client";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.scss";
import Cursor from "./components/Cursor";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="main">
      <Head>
        <title>marc lópez portfolio</title>
        <meta
          name="description"
          content="This is Marc López's portfolio website, where you can check all his projects and experience."
        />
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
