import Link from "next/link";
import React from "react";
import styles from "@/public/styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <p>NotFound</p>
      <Link href="/">BACK HOME</Link>
    </div>
  );
}
