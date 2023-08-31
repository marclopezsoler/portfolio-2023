"use client";
import { motion } from "framer-motion";
import styles from "@/public/styles/Contact.module.scss";
import Head from "next/head";
import { useEffect } from "react";

export const metadata = {
  title: "contact | marc lópez portfolio",
  description:
    "Contact if you would like to work with me or have any question.",
};

const ContactPage = () => {
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
      <Head>
        <title>contact | marc lópez portfolio</title>
        <meta
          name="description"
          content="Contact if you would like to work with me or have any question."
        />
        <meta name="theme-color" content="#020b55" />
        <link rel="icon" href="../icon.ico" type="image/x-icon"/>
      </Head>
      <div className={styles.main}>
        <p>CONTACT</p>
      </div>
    </motion.div>
  );
};

export default ContactPage;
