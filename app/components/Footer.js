import styles from "@/public/styles/components/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <section className={styles.footer_row}>
        <Link href="/" className={styles.footer_link}>Home</Link>
        <Link href="/work" className={styles.footer_link}>Work</Link>
        <Link href="/about" className={styles.footer_link}>About</Link>
        <Link href="/contact" className={styles.footer_link}>Contact</Link>
        <a href="https://www.linkedin.com/in/marc-lopez-soler/" target="_blank" className={styles.footer_link}>Linkedin</a>
        <a href="https://github.com/marclopezsoler" target="_blank" className={styles.footer_link}>Github</a>
        <a href="https://www.instagram.com/lopezsmarc/" target="_blank" className={styles.footer_link}>Instagram</a>
        <a href="https://twitter.com/marclopezsoler" target="_blank" className={styles.footer_link}>Twitter</a>
          <a href="https://files.marclopez.xyz/CV_2023_MarcLopez.pdf" target="_blank" className={styles.footer_link}>CV</a>
      </section>
      <section className={styles.footer_row}>
        <span className={styles.footer_copy}>© 2023 Portfolio by Marc López</span>
      </section>
    </nav>
  );
}
