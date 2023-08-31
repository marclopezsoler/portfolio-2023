import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import "../globals.scss";

import { useEffect, useState } from "react";

export default function ImageComponent({ workId, image_alt, numberImg }) {
  const [hideImg, setHideImg] = useState(true);
  const [zoom, doZoom] = useState(false);

  const jpgImagePath = `/assets/images/work/${workId}/image${numberImg}.jpg`;
  const gifImagePath = `/assets/images/work/${workId}/image${numberImg}.gif`;

  let imageSrc = jpgImagePath || gifImagePath;

  useEffect(() => {
    if (imageSrc) {
      setHideImg(false);
    } else {
      alert("image does not exist");
    }
  }, [imageSrc]);

  const showZoom = () => {
    if (zoom === true) {
      doZoom(true);
      alert(zoom);
    } else {
      doZoom(true);
      alert(zoom);
    }
  };

  return (
    <div className={styles.image_parent}>
      {/* <div className={styles.full_width}>
        <a className={styles.cross} onClick={showZoom}>
          X
        </a>
        <Image
          id="image"
          src={imageSrc}
          width={1000}
          height={1000}
          className={`${styles.image_zoom} ${hideImg ? styles.hide_img : ""} ${
            !zoom ? styles.show : ""
          }`}
          alt={image_alt}
        />
      </div> */}
      <Image
        id="image"
        src={imageSrc}
        width={1000}
        height={1000}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""} ${
          zoom ? styles.noselect : ""
        }`}
        alt={image_alt}
        onClick={showZoom}
      />
    </div>
  );
}
