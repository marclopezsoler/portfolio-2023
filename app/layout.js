"use client";
import { Inter } from "next/font/google";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";
import { isMobile } from "react-device-detect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="main">
      <body className={inter.className}>
        <Header />
        {isMobile ? <></> : <Cursor />}
        {children}
      </body>
    </html>
  );
}
