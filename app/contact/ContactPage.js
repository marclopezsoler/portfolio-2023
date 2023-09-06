"use client";
import styles from "@/public/styles/Contact.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

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
        <link rel="icon" href="../icon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.main}>
        <div className={styles.contact_page}>
          <section className={styles.first_part}>
            <h1 className={styles.title}>get in touch</h1>
            <h3 className={styles.subtitle}>let's transform your ideas into reality together!</h3>
            <a href="mailto:marcls.arbucies@gmail.com" target="_blank" className={styles.mail}>marcls.arbucies@gmail.com</a>
          </section>
          <section  className={styles.second_part}>
            <ContactForm />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
