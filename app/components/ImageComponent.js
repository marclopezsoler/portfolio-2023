import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import { useEffect, useState } from "react";

export default function ImageComponent({ workId, image_alt, numberImg }) {
  const [hideImg, setHideImg] = useState();

  useEffect(() => {
    if (image_alt === "" || !image_alt) {
      setHideImg(true);
    } else {
      setHideImg(false);
    }
  }, []);

  return (
    <Image
      src={`/assets/images/work/${workId}/image${numberImg}.jpg`}
      width={100}
      height={100}
      className={`${styles.image} ${hideImg ? styles.hide_img : ""}`}
      alt={image_alt}
    />
  );
}
