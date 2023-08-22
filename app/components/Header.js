"use client";
import styles from "@/public/styles/components/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav_extended}>
      <a className={`${styles.toggle} ${styles.link}`} onClick={toggleMenu}>
        m
      </a>
      <div className={styles.nav_menu}>
        <Link
          href="/"
          className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide1} ${
            styles.link
          }`}
          onClick={closeMenu}
        >
          home
        </Link>
        <Link
          href="/work"
          className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide2} ${
            styles.link
          }`}
          onClick={closeMenu}
        >
          work
        </Link>
        <Link
          href="/about"
          className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide3} ${
            styles.link
          }`}
          onClick={closeMenu}
        >
          about
        </Link>
        <Link
          href="/contact"
          className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide4} ${
            styles.link
          }`}
          onClick={closeMenu}
        >
          contact
        </Link>
      </div>
    </nav>
  );
}
