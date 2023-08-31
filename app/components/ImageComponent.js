import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import "../globals.scss";

import { useEffect, useState } from "react";

export default function ImageComponent({ workId, image_alt, numberImg }) {
  const [hideImg, setHideImg] = useState(true);

  const jpgImagePath = `/assets/images/work/${workId}/image${numberImg}.jpg`;
  const gifImagePath = `/assets/images/work/${workId}/image${numberImg}.gif`;

  let imageSrc = jpgImagePath || gifImagePath;

  useEffect(() => {
    if (imageSrc) {
      setHideImg(false);
    } else{
      alert('image does not exist');
    }
  }, [imageSrc]);

  return (
    <div className={styles.image_parent}>
      <Image
        id="image"
        src={imageSrc}
        width={1000}
        height={1000}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""}`}
        alt={image_alt}
      />
    </div>
  );
}
