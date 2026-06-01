"use client";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import Highlight from "./components/Highlight";
import MyBest from "./components/MyBest";

import styles from "@/public/styles/Home.module.scss";

const HomePage = () => {
  const [homeLoads, setHomeLoads] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("homeLoads");
    const count = stored === null ? 1 : Number(stored) + 1;
    sessionStorage.setItem("homeLoads", String(count));

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
              full stack
            </h1>
            <div className={styles.title_parent2}>
              <h1
                className={`${styles.home_title} ${
                  homeLoads === 1 ? styles.animate_titleX2 : ""
                }`}
              >
                software{" "}
              </h1>
              <h1
                className={`${styles.home_title} ${
                  homeLoads === 1 ? styles.animate_titleX : ""
                }`}
              >
                engineer
              </h1>
            </div>
          </div>
          <h2
            className={`${styles.home_subtitle} ${
              homeLoads === 1 ? styles.animate_subtitle : ""
            }`}
          >
            marc lópez is a Full Stack & AI Engineer who designs robust SaaS
            architectures and manages cloud infrastructure while maintaining a
            high-fidelity & interactive frontend experience
          </h2>
        </section>
        <section className={styles.home_section_2}>
          <h2 className={styles.subtitle_part2}>what I do best</h2>
          <p className={styles.p}>
            These are some aspects I excel at, for further detail, go to the
            about section!
          </p>
          <div className={styles.best_parent}>
            <MyBest
              title={"Full Stack Architecture"}
              description="Designing robust, end-to-end SaaS applications using TypeScript, Node.js, Express, and NestJS backends paired with modern React environments."
            />
            <MyBest
              title={"AI & Agentic Workflows"}
              description="Integrating LLM orchestration (OpenAI, Anthropic APIs) and building automated AI agent loops directly into production application logic."
            />
            <MyBest
              title={"SEO, Google Analytics and MyBusiness"}
              description="Structuring complex relational databases, handling real-time third-party streams, and optimizing vector mechanics like semantic search via pgvector and Elasticsearch."
            />
            <MyBest
              title={"DevOps & CI/CD Pipelines"}
              description="Automating workflows via GitHub/GitLab CI/CD, configuring self-hosted environment runners, and managing containerized applications with Docker."
            />
            <MyBest
              title={"Secure Cloud Infrastructure"}
              description="Provisioning resources across Google Cloud Platform (GCP), handling object storage with Cloud Storage Buckets, and securing credentials through Secret Manager."
            />
            <MyBest
              title={"Product UI/UX Engineering"}
              description="Bridging the gap between code and high-fidelity interaction design to build responsive web apps and native mobile applications via React Native."
            />
          </div>
        </section>
        <section className={styles.home_section_3}>
          <div className={styles.highlight_container}>
            <h2 className={styles.h2}>highlighted projects</h2>
            <p className={styles.p}>
              Check out a few highlighted projects, if you want to explore more
              of them, go to the work section!
            </p>
            <div className={styles.highlight_parent}>
              <Highlight
                title={`funerary services website`}
                filename_small={`pfb_small.png`}
                filename_big={`pfb_big.png`}
                subtitle={`Next.js + Directus CMS`}
                link={`work14`}
                selected={1}
              />
              <Highlight
                title={`stroke assessment toolkit`}
                filename_small={`race_small.png`}
                filename_big={`race_big.png`}
                subtitle={`mobile + dashboard`}
                link={`work15`}
                selected={2}
              />
            </div>
          </div>
        </section>
        <section className={styles.home_section_4}>
          <h2 className={styles.section4_title}>hey! you got to the bottom</h2>
          <p className={styles.section4_subtitle}>
            feel free to explore the other sections
          </p>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
