import Link from "next/link";
import styles from "@/public/styles/components/Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.menu_item}>home</Link>
      <Link href="/work" className={styles.menu_item}>work</Link>
      <Link href="/about" className={styles.menu_item}>about</Link>
      <Link href="/contact" className={styles.menu_item}>contact</Link>
    </nav>
  );
}
