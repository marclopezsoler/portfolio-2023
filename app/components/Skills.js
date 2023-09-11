import styles from "@/public/styles/components/Skills.module.scss";

export default function Skills({ title, num }) {
  return (
    <div className={styles.bar}>
      <div className={styles.bar_full} style={{ width: num }}></div>
      <p>{title}</p>
    </div>
  );
}
