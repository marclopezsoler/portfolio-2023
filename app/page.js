"use client";
import styles from "@/public/styles/Home.module.scss";
import { motion } from "framer-motion";

export const metadata = {
  title: "marc lópez portfolio",
  description: "",
};

const App = () => {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <main className={styles.main}>
        <section className={styles.home_section_1}>
          <h1 className={styles.home_title}>creative digital artist</h1>
        </section>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
        <p>home</p>
      </main>
    </motion.div>
  );
}

export default App;