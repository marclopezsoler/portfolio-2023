"use client";
import { motion } from "framer-motion";
import styles from "@/public/styles/Contact.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import useContactForm from "../api/useContactForm";
import sendEmail from "../api/sendEmail";

export const metadata = {
  title: "contact | marc lópez portfolio",
  description:
    "Contact if you would like to work with me or have any question.",
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

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
        <p>CONTACT</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            value={values.email}
            onChange={handleChange}
            type="email"
          />

          <label htmlFor="subject">Subject</label>
          <input
            required
            id="subject"
            value={values.subject}
            onChange={handleChange}
            type="text"
          />
          <label htmlFor="message">Message</label>
          <textarea
            required
            value={values.message}
            onChange={handleChange}
            id="message"
            rows={8}
          />
          <button type="submit" value="Submit">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
