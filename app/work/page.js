import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import works from "../_data/data";

export const metadata = {
  title: "work | marc lópez portfolio",
  description: "",
};

export default function Work() {
  return (
    <div className={styles.main}>
      <p>WORK</p>
      {works.map((work) => (
        <Link href={`/work/${work.id}`} key={work.id}>
          {work.title}
        </Link>
      ))}
    </div>
  );
}
