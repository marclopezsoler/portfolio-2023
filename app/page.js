// "use client";
// import { motion } from "framer-motion";
import styles from "@/public/styles/Home.module.scss";

export const metadata = {
  title: "marc lópez portfolio",
  description: "",
};

const App = () => {
  return (
    // <motion.div
    //   className="container text-center  bg-black"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.35 }}
    // >
      <main className={styles.main}>
        <section className={styles.home_section_1}>
          <h1 className={styles.home_title}>creative digital artist</h1>
          <h2 className={styles.home_subtit}>marc lópez is a digital artist and developer from Barcelona, he's keen on creating cool and simple stuff</h2>
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
    // </motion.div>
  );
}

export default App;