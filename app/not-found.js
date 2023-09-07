"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styles from "@/public/styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.main}>
        <h2 className={styles.h2}>Ooops...</h2>
        <h3 className={styles.h3}>can't find that page</h3>
        <Link href="/" className={styles.link}>BACK TO HOME</Link>
      </div>
    </motion.div>
  );
}
