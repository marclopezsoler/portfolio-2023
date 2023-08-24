import React, { useEffect } from "react";
import styles from "@/public/styles/components/Cursor.module.scss";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    let size;

    const handleMouseMove = (ev) => {
      let path = ev.composedPath();

      if (path.some((x) => x.tagName === "A" || x.tagName === "BUTTON")) {
        size = 20;
        cursor.classList.add(`${styles.hovering}`);
      } else {
        size = 15;
        cursor.classList.remove(`${styles.hovering}`);
      }

      cursor.style.left = ev.clientX - size / 2 + "px";
      cursor.style.top = ev.clientY - size / 2 + "px";
      cursor.style.width = size + "px";
      cursor.style.height = size + "px";
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor" className={styles.cursor}></div>;
}

export default Cursor;
