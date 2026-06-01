"use client";
import styles from "@/public/styles/components/Popup.module.scss";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Popup() {
  const [popup, setPopup] = useState(0);

  useEffect(() => {
    let count: number;
    const storedCount = localStorage.getItem("popup");
    if (storedCount === null) {
      count = 1;
    } else {
      count = Number(storedCount) + 1;
    }
    localStorage.setItem("popup", String(count));

    setPopup(count);
  }, []);

  return (
    <div className={styles.main}>
      {isMobile ? (
        <div className={`${styles.popup} ${popup >= 1 ? styles.animate : ""}`}>
          <p>
            For a better experience, use a desktop or laptop to explore this
            site.
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
