"use client";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import ContactForm from "../components/ContactForm";

import styles from "@/public/styles/Contact.module.scss";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contactLoads, setContactLoads] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("contactLoads");
    const count = stored === null ? 1 : Number(stored) + 1;
    sessionStorage.setItem("contactLoads", String(count));

    setContactLoads(count);
  }, []);

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet title="contact | marc lópez portfolio" />
      <div className={styles.main}>
        <div className={styles.contact_page}>
          <section
            className={`${styles.first_part} ${
              contactLoads === 1 ? styles.animateLeft : ""
            }`}
          >
            <h1 className={styles.title}>let's get in touch</h1>
            <h3 className={styles.subtitle}>
              have something in mind?<br></br>let's transform your ideas into
              reality together!
            </h3>
          </section>
          <section
            className={`${styles.second_part} ${
              contactLoads === 1 ? styles.animateRight : ""
            }`}
          >
            <ContactForm />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
