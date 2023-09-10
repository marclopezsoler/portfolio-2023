"use client";
import styles from "@/public/styles/About.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    "and I'm a full stack developer",
    "and I'm a generative artist",
    "and I'm a community manager",
    "and I'm a graphic designer",
    "and I'm a content creator",
  ];
  let index = 0;

  const change = () => {
    document.getElementById("word").innerHTML = values[index];
    index = ++index % values.length;
    setTimeout(change, 2000);
  };

  useEffect(() => {
    change();
  }, []);

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet title="about | marc lópez portfolio" />
      <div className={styles.main}>
        {/* UNDER DEVELOPMENT */}
        <h1 className={styles.title}>
          This page is still under development, stay tuned!
        </h1>
        <Link href="https://marclopez.xyz/" className={styles.link}>
          BACK TO HOME
        </Link>
        <section className={styles.content}>
          <div className={styles.first_content}>
            <div className={styles.text_parent}>
              <h1 className={styles.title}>
                IT'S ME,<br></br>
                <b>marc lópez</b>
              </h1>
              <p className={styles.tag} id="word">
                full stack developer
              </p>
            </div>
            <Image
              src={require(`/public/assets/images/about/profile_pic.png`)}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
