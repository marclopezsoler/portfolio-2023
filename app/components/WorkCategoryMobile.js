import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";

function WorkCategoryMobile({ works, categoryType }) {
  return (
    <div id={categoryType} className={styles.work_type_mobile}>
      <h2 className={styles.category_type}>{categoryType}</h2>
      {works.map((work) =>
        work.type === categoryType ? (
          <button className={styles.workItem_mobile} key={work.id}>
            <Link
              href={`/work/${work.id}`}
              className={styles.link}
              id={work.type}
            >
              <p className={styles.title}>
                <span>{work.class}</span>
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
