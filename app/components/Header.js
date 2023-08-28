"use client";
import styles from "@/public/styles/components/Header.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Header({late}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <nav className={`${styles.nav_extended} ${late ? styles.header_late : styles.header_normal}`}>
      <div className={styles.header}>
        <button className={styles.toggle} onClick={toggleMenu}>m</button>
        <div className={` ${isMenuOpen ? styles.show_element : styles.hide_element} ${styles.nav_menu_parent}`}>
          <div className={styles.nav_menu}>
            <Link href="/" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide1}`} onClick={closeMenu}>home</Link>
            <Link href="/work" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide2}`} onClick={closeMenu}>work</Link>
            <Link href="/about" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide3}`} onClick={closeMenu}>about</Link>
            <Link href="/contact" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide4}`} onClick={closeMenu}>contact</Link>
          </div>
        </div>
      </div>
    </nav>
    <div className={` ${isMenuOpen ? styles.show_elementBg: styles.hide_elementBg} ${styles.background}`}></div>
    </>
  );
}
