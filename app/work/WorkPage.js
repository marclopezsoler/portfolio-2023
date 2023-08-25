"use client";
import { motion } from "framer-motion";
import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import works from "../_data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import { isMobile } from "react-device-detect";

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
            <section className={styles.work_items}>
              {works.map((work) => {
                return (
                  <button
                    className={`${styles.workItem} ${
                      hoveredItemId === work.id ? styles.opacity : ""
                    }`}
                    key={work.id}
                    onMouseEnter={() => setHoveredItemId(work.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                  >
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
                    <Image
                      src={`/assets/images/work/${work.id}/image1.jpg`}
                      width={100}
                      height={100}
                      className={styles.image}
                      style={{
                        left: `${
                          work.num % 2 != 0
                            ? localX - 220 + "px"
                            : localX + 20 + "px"
                        }`,
                        top: localY - 50 + "px",
                      }}
                      alt={work.title}
                    />
                  </button>
                );
              })}
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
              {works.map((work) => {
                return (
                  <button
                    className={`${styles.workItem_mobile} ${
                      hoveredItemId === work.id ? styles.opacity : ""
                    }`}
                    key={work.id}
                    onMouseEnter={() => setHoveredItemId(work.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                  >
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
                );
              })}
            </section>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default WorkPage;
