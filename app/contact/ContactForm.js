import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/public/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ua12rmb",
        "template_hwsazmg",
        form.current,
        "IVyl79FWzv6X0FHkY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.main}>
      <input
        type="text"
        name="user_name"
        className={styles.name}
        placeholder="Enter your name"
        required
      />
      <input
        type="email"
        name="user_email"
        className={styles.email}
        placeholder="Enter yout email address"
        required
      />
      <textarea
        name="message"
        className={styles.message}
        placeholder="Say something..."
        required
      />
      <button className={styles.button_parent}>
        <input type="submit" value="Send message" className={styles.button} />
      </button>
    </form>
  );
}
