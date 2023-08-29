"use client";
import styles from "@/public/styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

export const metadata = {
  title: "marc lópez portfolio",
  description:
    "This is Marc López's portfolio website, where you can check all his projects and experience.",
};

const HomePage = () => {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Head>
        <title>marc lópez portfolio</title>
        <meta
          name="description"
          content="This is Marc López's portfolio website, where you can check all his
          projects and experience."
        />
        <meta name="theme-color" content="#020b55" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <section className={styles.home_section_1}>
          <div className={styles.title_parent}>
            <h1 className={`${styles.home_title} ${styles.animate_titleY}`}>
              creative
            </h1>
            <div className={styles.title_parent2}>
              <h1 className={`${styles.home_title} ${styles.animate_titleX2}`}>
                digital{" "}
              </h1>
              <h1 className={`${styles.home_title} ${styles.animate_titleX}`}>
                artist
              </h1>
            </div>
          </div>
          <h2 className={`${styles.home_subtitle} ${styles.animate_subtitle}`}>
            marc lópez is a digital artist and developer from Barcelona, he's
            keen on creating cool and simple stuff
          </h2>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
