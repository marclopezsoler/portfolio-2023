import styles from "@/public/styles/components/Skills.module.scss";
import { SkillsProps } from "@/app/types";

export default function Skills({ title, num }: SkillsProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.bar_full} style={{ width: num }}></div>
      <p>{title}</p>
    </div>
  );
}
