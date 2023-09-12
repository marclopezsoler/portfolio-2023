"use client";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";
import "./globals.scss";
import Script from "next/script";
import "@/public/styles/utilities/variables.scss";
import ReactGA from "react-ga";

const RootLayout = ({ children }) => {
  ReactGA.initialize("G-CYPLVVSN8B", { standardImplementation: true });

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

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
          as="style"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
          media="print"
          onload="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
          />
        </noscript>

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          as="style"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          media="print"
          onload="this.media='all'"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          />
        </noscript>
        <Script
          src="<%=htmlWebpackPlugin.options.analyticsURL%>"
          strategy="afterInteractive"
        >
          {`
        (function (i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          (i[r] =
            i[r] ||
            function () {
              (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(
          window,
          document,
          'script',
          '<%=htmlWebpackPlugin.options.analyticsURL%>',
          'ga'
        );
        ga('create', 'G-CYPLVVSN8B', 'auto');
        ga('send', 'pageview');
      `}
        </Script>
      </Head>

      <body>
        <section className="content">
          <Header />
          {isMobile ? <Popup /> : <Cursor />}
          <div className="main">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
