"use client";
import React, { useEffect } from "react";
import styles from "@/public/styles/components/Cursor.module.scss"

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', e.clientX + 'px');
      document.body.style.setProperty('--y', e.clientY + window.pageYOffset + 'px');
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h4 className={styles.cursor}></h4>
    </div>
  );
}

export default Cursor;
