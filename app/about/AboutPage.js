"use client";
import { motion } from "framer-motion";
import styles from "@/public/styles/About.module.scss";

export const metadata = {
  title: "about | marc lópez portfolio",
  description: "",
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
      <div className={styles.main}>
        <p>ABOUT</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;