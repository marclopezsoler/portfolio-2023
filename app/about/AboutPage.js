"use client";
import styles from "@/public/styles/About.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <h1 className={styles.title}>
          This page is still under development, stay tuned!
        </h1>
        <Link href="https://marclopez.xyz/" className={styles.link}>
          BACK TO HOME
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutPage;
