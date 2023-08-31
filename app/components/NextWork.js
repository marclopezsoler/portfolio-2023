import Link from "next/link";
import styles from "@/public/styles/components/NextWork.module.scss";
import { isMobile } from "react-device-detect";

export default function NextWork({ nextWork, short_slug }) {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        like what you're seeing?<br></br>take a look to another work{" "}
        <span className={styles.link_parent}>
          <Link
            href={`/work/work${nextWork}`}
            className={styles.link}
          >
            here
          </Link>
          !<span className={`${styles.finger} ${isMobile ? styles.hide : ""}`}>👈</span>
        </span>
      </p>
    </div>
  );
}
