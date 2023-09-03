import styles from "@/public/styles/components/Highlight.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Highlight({ title, filename_small, filename_big, subtitle, link, selected }) {
  return (
    <Link href={`/work/${link}`}>
      <div className={styles.highlight_box}>
        <div className={styles.first_part}>
          <h2 className={styles.title}>{title}</h2>
          <Image
            src={`/assets/images/home/highlighted/${filename_small}`}
            width={350}
            height={350}
            className={styles.highlight_small_image}
          />
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <div
          className={styles.second_part}
          style={{
            backgroundImage: `url('/assets/images/home/highlighted/${filename_big}')`,
          }}
        >
          <span className={styles.selected}>
            selected <span className={styles.selected_num}>{selected}/2</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
