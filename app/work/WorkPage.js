"use client";
import styles from "@/public/styles/Work.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import works from "../_data/data";
import WorkCategory from "../components/WorkCategory";
import WorkCategoryMobile from "../components/WorkCategoryMobile";

export const metadata = {
  title: "work | marc lópez portfolio",
  description: "Check out all my works here!",
};

const WorkPage = () => {
  const [localX, setLocalX] = useState(0);
  const [localY, setLocalY] = useState(0);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [workLoads, setWorkLoads] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let count = sessionStorage.getItem("workLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("workLoads", count);

    setWorkLoads(count);
  }, []);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const x = ev.clientX;
      const y = ev.clientY + window.scrollY;
      setLocalX(x);
      setLocalY(y);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Head>
        <title>work | marc lópez portfolio</title>
        <meta name="description" content="Check out all my works here!" />
        <meta name="theme-color" content="#020b55" />
        <link rel="icon" href="../icon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.main}>
        {!isMobile ? (
          <section className={styles.work_content}>
            <section className={styles.tags_parent}>
              <div className={styles.work_tags}>
                <a href="#developing">dev</a>
                <a href="#design">design</a>
                <a href="#other">other</a>
              </div>
            </section>
            <section className={`${styles.work_items} ${workLoads === 1 ? styles.animate_content : ""}`}>
              <WorkCategory works={works} categoryType="developing" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategory works={works} categoryType="design" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategory works={works} categoryType="other" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
            </section>
          </section>
        ) : (
          <section className={styles.work_content_mobile}>
            <section className={styles.tags_parent_mobile}>
              <a href="#developing">dev</a>
              <a href="#design">design</a>
              <a href="#other">other</a>
            </section>
            <section className={`${styles.work_items_mobile} ${workLoads === 1 ? styles.animate_content : ""}`}>
              <WorkCategoryMobile works={works} categoryType="developing" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategoryMobile works={works} categoryType="design" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategoryMobile works={works} categoryType="other" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
            </section>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default WorkPage;
