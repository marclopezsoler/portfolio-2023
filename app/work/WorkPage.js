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
                <a href="#uni">uni</a>
                <a href="#personal">personal</a>
                <a href="#work">work</a>
              </div>
            </section>
            <section className={`${styles.work_items}`}>
              <WorkCategory works={works} categoryType="uni" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategory works={works} categoryType="personal" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategory works={works} categoryType="work" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
            </section>
          </section>
        ) : (
          <section className={styles.work_content_mobile}>
            <section className={styles.tags_parent_mobile}>
              <a href="#uni">uni</a>
              <a href="#personal">personal</a>
              <a href="#work">work</a>
            </section>
            <section className={styles.work_items_mobile}>
              <WorkCategoryMobile works={works} categoryType="uni" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategoryMobile works={works} categoryType="personal" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
              <WorkCategoryMobile works={works} categoryType="work" {...{hoveredItemId, setHoveredItemId, localX, localY}}/>
            </section>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default WorkPage;
