"use client";
import styles from "@/public/styles/Contact.module.scss";
import { motion } from "framer-motion";

export const metadata = {
  title: "contact | marc lópez portfolio",
  description: "",
};

export default function Contact() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.main}>
        <p>CONTACT</p>
      </div>
    </motion.div>
  );
}
