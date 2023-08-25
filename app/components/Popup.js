"use client";
import styles from "@/public/styles/components/Popup.module.scss";
import { useEffect, useState } from "react";

export default function Popup() {
  const [popup, setPopup] = useState(0);

  useEffect(() => {
    let count = sessionStorage.getItem("popup");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("popup", count);

    setPopup(count);
  }, []);

  return (
    <div className={styles.main}>
      <div className={`${styles.popup} ${popup >= 1 ? styles.animate : ""}`}>
        <p>
          For a better experience, use a desktop or laptop to explore this site.
        </p>
      </div>
    </div>
  );
}
