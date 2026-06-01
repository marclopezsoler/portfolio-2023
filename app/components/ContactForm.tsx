import React, { useRef, useState } from "react";
import styles from "@/public/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.main}>
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
      <p className={`${styles.sent} ${sent ? styles.show : ""}`}>
        Your message has been successfully sent!
      </p>
      {error && (
        <p className={`${styles.sent} ${styles.show}`} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </form>
  );
}
