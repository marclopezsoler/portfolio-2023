import styles from "@/public/styles/components/Highlight.module.scss";
import Link from "next/link";
import { HighlightProps } from "@/app/types";

export default function Highlight({ title, image, subtitle, link }: HighlightProps) {
  return (
    <Link href={`/work/${link}`} className={styles.highlight_box}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('/assets/images/home/highlighted/${image}')` }}
      />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </Link>
  );
}
