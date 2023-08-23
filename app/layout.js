import { Inter } from "next/font/google";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "marc lópez portfolio",
  description: "",
};

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
