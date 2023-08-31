import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import { useEffect, useState } from "react";
import closeIcon from "@/public/assets/icons/close.svg";
import { isMobile } from "react-device-detect";

export default function ImageComponent({ workId, image_alt, numberImg }) {
  const [hideImg, setHideImg] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const jpgImagePath = `/assets/images/work/${workId}/image${numberImg}.jpg`;
  const gifImagePath = `/assets/images/work/${workId}/image${numberImg}.gif`;

  let imageSrc = jpgImagePath || gifImagePath;

  useEffect(() => {
    if (imageSrc) {
      setHideImg(false);
    } else {
      alert("Image does not exist");
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageSrc]);

  const toggleFullImage = () => {
    setShowFullImage(!showFullImage);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowFullImage(false);
    }
  };

  return (
    <div className={styles.image_parent}>
      <div
        className={`${styles.full_width} ${
          showFullImage ? styles.show : ""
        }`}
        
      >
        {showFullImage && (
          <>
            <div className={styles.cross} onClick={toggleFullImage}><Image src={closeIcon} alt="Close" width={30} height={30} /></div>
            <Image
              id="fullImage"
              src={imageSrc}
              width={1000}
              height={1000}
              className={styles.full_image}
              alt={image_alt}
            />
          </>
        )}
      </div>
      <Image
        id="image"
        src={imageSrc}
        width={1000}
        height={1000}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""} ${isMobile ? "" : styles.image_hover}`}
        alt={image_alt}
        onClick={toggleFullImage}
      />
    </div>
  );
}
