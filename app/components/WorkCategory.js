import React from "react";
import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import Image from "next/image";

function WorkCategory({
  works,
  categoryType,
  hoveredItemId,
  setHoveredItemId,
  localX,
  localY,
}) {
  return (
    <div id={categoryType} className={styles.work_type}>
      <h2 className={styles.category_type}>{categoryType}</h2>
      {works.map((work) =>
        work.type === categoryType ? (
          <button
            className={`${styles.workItem} ${
              hoveredItemId === work.id ? styles.opacity : ""
            }`}
            key={work.id}
            onMouseEnter={() => setHoveredItemId(work.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <Link href={`/work/${work.id}`} className={styles.link}>
              <p className={styles.title}>
                <span>{work.class}</span>
                <span className={styles.space}>/</span>
                {work.title}
              </p>
            </Link>
            <Image
              src={`/assets/images/work/${work.id}/image1.jpg`}
              width={100}
              height={100}
              className={styles.image}
              priority
              style={{
                left: `${localX - 375}px`,
                top: `${localY - 50}px`,
              }}
              alt={work.title}
            />
          </button>
        ) : null
      )}
    </div>
  );
}

export default WorkCategory;
