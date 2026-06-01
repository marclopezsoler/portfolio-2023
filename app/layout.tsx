"use client";

import Script from "next/script";

import { isMobile } from "react-device-detect";

import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";

import dynamic from "next/dynamic";

const ClientNotifications = dynamic(() => import("./components/ClientNotifications"), { ssr: false });

import "./globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="main">
      <head>
        <title>marc lópez portfolio</title>
        <meta name="description" content="Marc López's portfolio website, where you can check all his projects and experience." />
        <meta name="theme-color" content="#000" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CYPLVVSN8B"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CYPLVVSN8B');
        `}
        </Script>
      </head>

      <body>
        <ClientNotifications>
          <section className="content">
            <Header />
            {isMobile ? <Popup /> : <Cursor />}
            <div className="main">{children}</div>
            <Footer />
          </section>
        </ClientNotifications>
      </body>
    </html>
  );
};

export default RootLayout;
