"use client";
import styles from "@/public/styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Highlight from "./components/Highlight";

export const metadata = {
  title: "marc lópez portfolio",
  description:
    "This is Marc López's portfolio website, where you can check all his projects and experience.",
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [homeLoads, setHomeLoads] = useState(0);

  useEffect(() => {
    let count = sessionStorage.getItem("homeLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("homeLoads", count);

    setHomeLoads(count);
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
            <h1
              className={`${styles.home_title} ${
                homeLoads === 1 ? styles.animate_titleY : ""
              }`}
            >
              creative
            </h1>
            <div className={styles.title_parent2}>
              <h1
                className={`${styles.home_title} ${
                  homeLoads === 1 ? styles.animate_titleX2 : ""
                }`}
              >
                digital{" "}
              </h1>
              <h1
                className={`${styles.home_title} ${
                  homeLoads === 1 ? styles.animate_titleX : ""
                }`}
              >
                artist
              </h1>
            </div>
          </div>
          <h2
            className={`${styles.home_subtitle} ${
              homeLoads === 1 ? styles.animate_subtitle : ""
            }`}
          >
            marc lópez is a digital artist and developer from Barcelona, he's
            keen on creating cool and simple stuff
          </h2>
        </section>
        <section className={styles.home_section_2}>
          <div className={styles.highlight_container}>
            <h2 className={styles.h2}>highlighted projects</h2>
            <div className={styles.highlight_parent}>
              <Highlight
                title={`generative splatter paintings`}
                filename_small={`pollock.jpg`}
                filename_big={`video_tfg.gif`}
                subtitle={`final degree project`}
                link={`work5`}
                selected={1}
              />
              <Highlight
                title={`happenin' app`}
                filename_small={`happenin.jpg`}
                filename_big={`happenin_video.gif`}
                subtitle={`events mobile app`}
                link={`work4`}
                selected={2}
              />
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
