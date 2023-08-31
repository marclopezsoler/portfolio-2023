import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import "../globals.scss";

import { useEffect, useState } from "react";

export default function ImageComponent({ workId, image_alt, numberImg }) {
  const [hideImg, setHideImg] = useState();
  const [full, setFull] = useState();

  useEffect(() => {
    if (image_alt === "" || !image_alt) {
      setHideImg(true);
    } else {
      setHideImg(false);
    }
  }, []);

  const fullWidth = () => {
    const image = document.getElementById("image");
    if (full) {
      setFull(false);
      image.classList.remove(styles.full_width);
    } else {
      setFull(true);
      image.classList.add(styles.full_width);
    }
  };

  return (
    <div className={styles.image_parent}>
      <Image
        id="image"
        src={`/assets/images/work/${workId}/image${numberImg}.jpg`}
        width={100}
        height={100}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""}`}
        alt={image_alt}
        onClick={fullWidth}
      />
    </div>
  );
}
