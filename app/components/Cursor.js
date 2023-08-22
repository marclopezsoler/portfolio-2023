"use client";
import React, { useEffect } from "react";
import styles from "@/public/styles/components/Cursor.module.scss";

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`);
    const links = document.querySelectorAll(".link");

    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', e.clientX + 'px');
      document.body.style.setProperty('--y', e.clientY + window.pageYOffset + 'px');
    };

    const handleLinkMouseEnter = () => {
      cursor.classList.add('link-hover');
    };

    const handleLinkMouseLeave = () => {
      cursor.classList.remove('link-hover');
    };

    window.addEventListener("mousemove", handleMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkMouseEnter);
      link.addEventListener("mouseleave", handleLinkMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkMouseEnter);
        link.removeEventListener("mouseleave", handleLinkMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <h4 className={styles.cursor}></h4>
    </div>
  );
}

export default Cursor;

