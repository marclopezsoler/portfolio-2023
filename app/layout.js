"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="main">
      <Head>
        <title>My page title</title>
      </Head>
      <body className={inter.className}>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
