import styles from "@/public/styles/components/MyBest.module.scss";

export default function MyBest({ title}) {
  return (
    <div className={styles.best_container}>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
}
