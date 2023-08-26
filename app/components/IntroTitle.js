import styles from "@/public/styles/components/IntroTitle.module.scss";

export default function IntroTitle() {
  return (
    <div className={`${styles.title_parent_first} ${styles.animate_bg}`}>
      <h1 className={`${styles.home_title} ${styles.animate_title_first_1}`}>
        marc
      </h1>
      <h1 className={`${styles.home_title} ${styles.animate_title_first_2}`}>
        lópez
      </h1>
    </div>
  );
}
