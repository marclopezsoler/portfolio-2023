import React, { useEffect } from "react";
import styles from "@/public/styles/components/Cursor.module.scss";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorSmall = document.getElementById("cursor_small");
    let size;
    let sizeSmall;

    const handleMouseMove = (ev) => {
      let path = ev.composedPath();

      if (path.some((x) => x.tagName === "A" || x.tagName === "BUTTON" || x.tagName === "IMG")) {
        size = 15;
        sizeSmall = 0;
        cursor.classList.add(`${styles.hovering}`);
      } else {
        size = 20;
        sizeSmall = 7.5;
        cursor.classList.remove(`${styles.hovering}`);
      }

      cursor.style.left = ev.clientX - size / 2 + "px";
      cursor.style.top = ev.clientY - size / 2 + "px";
      cursor.style.width = size + "px";
      cursor.style.height = size + "px";
      cursorSmall.style.left = ev.clientX - sizeSmall / 4 + "px";
      cursorSmall.style.top = ev.clientY - sizeSmall / 4 + "px";
      cursorSmall.style.width = sizeSmall + "px";
      cursorSmall.style.height = sizeSmall + "px";
    };

    const handleClick = () => {
      cursor.classList.add(`${styles.clickBig}`);
      cursorSmall.classList.add(`${styles.clickSmall}`);
    
      setTimeout(() => {
        cursor.classList.remove(`${styles.clickBig}`);
        cursorSmall.classList.remove(`${styles.clickSmall}`);
      }, 300);
    }
    

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div id="cursor" className={styles.cursor}></div>
      <div id="cursor_small" className={styles.cursor_small}></div>
    </>
  );
}

export default Cursor;
