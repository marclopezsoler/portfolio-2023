import styles from "@/public/styles/components/MyBest.module.scss";
import { MyBestProps } from "@/app/types";

export default function MyBest({ title }: MyBestProps) {
  return (
    <div className={styles.best_container}>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
}
