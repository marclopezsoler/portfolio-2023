"use client";
import styles from "@/public/styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Highlight from "./components/Highlight";
import MyBest from "./components/MyBest";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [homeLoads, setHomeLoads] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Helmet title="marc lópez portfolio" />
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
          <h2 className={styles.subtitle_part2}>what I do best</h2>
          <p className={styles.p}>These are some aspects I excel at, for further detail, go to the about section!</p>
          <div className={styles.best_parent}>
            <MyBest title={"Front End Developing"} />
            <MyBest title={"Responsive Web & Apps"} />
            <MyBest title={"SEO Google Analytics and MyBusiness"} />
            <MyBest title={"UI Design"} />
            <MyBest title={"Graphic Design"} />
            <MyBest title={"Social Media managing"} />
          </div>
        </section>
        <section className={styles.home_section_3}>
          <div className={styles.highlight_container}>
            <h2 className={styles.h2}>highlighted projects</h2>
            <p className={styles.p}>Check out a few highlighted projects, if you want to explore more of them, go to the work section!</p>
            <div className={styles.highlight_parent}>
              <Highlight
                title={`generative splatter paintings`}
                filename_small={`pollock.png`}
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
        <section className={styles.home_section_4}>
          <h2 className={styles.section4_title}>hey! you got to the bottom</h2>
          <p className={styles.section4_subtitle}>feel free to explore the other sections</p>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
