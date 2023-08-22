"use client";
import { Inter } from "next/font/google";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="main">
      <body className={inter.className}>
        <Header />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
