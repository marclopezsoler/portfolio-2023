import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import "./globals.scss";

export const metadata = {
  title: "marc lópez portfolio",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="main">
      <body>
        <Header />
        {isMobile ? <></> : <Cursor />}

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
