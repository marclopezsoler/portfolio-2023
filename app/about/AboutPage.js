"use client";
import { motion } from "framer-motion";
import styles from "@/public/styles/About.module.scss";
import Head from "next/head";

export const metadata = {
  title: "about | marc lópez portfolio",
  description: "Get to know me better and discover my experience and passions.",
};

const AboutPage = () => {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Head>
        <title>about | marc lópez portfolio</title>
        <meta
          name="description"
          content="Get to know me better and discover my experience and passions."
        />
        <link rel="shortcut icon" href="./icon.ico" />
      </Head>
      <div className={styles.main}>
        <p>ABOUT</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
