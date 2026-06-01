import React, { useState } from "react";
import { useNotifications } from "notiflow";
import styles from "@/public/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { notify } = useNotifications();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        notify({
          message: data.error ?? "Something went wrong. Please try again.",
          type: "error",
          duration: 5000,
          canClose: true,
        });
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      notify({
        message: "Your message has been successfully sent!",
        type: "info",
      });
    } catch {
      notify({
        message: "Network error. Please check your connection and try again.",
        type: "error",
        duration: 5000,
        canClose: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className={styles.main}>
      <div>
        <label>Name *</label>
        <input
          type="text"
          name="user_name"
          value={name}
          className={styles.name}
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email *</label>
        <input
          type="email"
          name="user_email"
          value={email}
          className={styles.email}
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message *</label>
        <textarea
          name="message"
          value={message}
          className={styles.message}
          placeholder="Say something..."
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.button_parent} disabled={loading}>
        <input
          type="submit"
          value={loading ? "SENDING..." : "SEND MESSAGE"}
          className={styles.button}
          disabled={loading}
        />
      </button>
    </form>
  );
}
