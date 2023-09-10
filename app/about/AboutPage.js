"use client";
import styles from "@/public/styles/About.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
      const y = window.scrollY - height;
      setScrollY(y);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const combinedTop = `calc(40% + ${0.15*scrollY}px)`;

  const styleBg = {
    top: combinedTop,
  };

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
        {/* <h1 className={styles.title}>
          This page is still under development, stay tuned!
        </h1>
        <Link href="https://marclopez.xyz/" className={styles.link}>
          BACK TO HOME
        </Link> */}
        <div className={styles.content}>
          <section className={styles.first_content}>
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
          </section>
          <section
            className={styles.second_content}
            style={{
              backgroundImage: 'url("/assets/images/about/profile_bg.jpg")',
            }}
          >
            <p style={styleBg}>
              living in the area of Barcelona, has given me opportunity to be
              surrounded and close to major landmarks and artistic and cultural
              exhibitions. During my univeristy period, I assisted to talks
              about tech, AI, generative art and much more. I consider my
              professional career started when I stopped just looking at these
              people, but I started to try to do what they were doing.
            </p>
          </section>
          <section className={styles.third_section}></section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
