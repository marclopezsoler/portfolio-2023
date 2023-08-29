import styles from "@/public/styles/components/IntroTitle.module.scss";
import { useEffect, useState } from "react";

export default function IntroTitle() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenAnimation');
    if (!hasSeenAnimation) {
      setShowAnimation(true);
      localStorage.setItem('hasSeenAnimation', 'true');
      setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
    }
  }, []);

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
