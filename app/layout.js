import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="main">
      <body className={inter.className}>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
