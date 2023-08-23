"use client";
import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import works from "../_data/data";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.main}>
        <p>WORK</p>
        {works.map((work) => (
          <Link href={`/work/${work.id}`} key={work.id}>
            {work.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
