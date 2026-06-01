import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import { WorkCategoryMobileProps } from "@/app/types";

function WorkCategoryMobile({ works, categoryType }: WorkCategoryMobileProps) {
  return (
    <div className={styles.work_type_mobile}>
      {works.map((work) =>
        work.category === categoryType ? (
          <button className={styles.workItem_mobile} key={work.id}>
            <Link
              href={`/work/${work.id}`}
              className={styles.link}
              id={work.type}
            >
              <p className={styles.title}>
                <span>{work.type}</span>
                <span className={styles.space}>/</span>
                {work.title}
              </p>
            </Link>
          </button>
        ) : null
      )}
    </div>
  );
}

export default WorkCategoryMobile;
