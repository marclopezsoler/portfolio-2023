"use client";
import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import { useEffect, useState } from "react";
import closeIcon from "@/public/assets/icons/close.svg";
import { isMobile } from "react-device-detect";
import { ImageComponentProps } from "@/app/types";

export default function ImageComponent({ workId, image_alt, numberImg, imageExt = 'jpg' }: ImageComponentProps) {
  const [hideImg, setHideImg] = useState(true);
  const [noSrc, setNoSrc] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const imageSrc = `/assets/images/work/${workId}/image${numberImg}.${imageExt}`;

  useEffect(() => {
    if (imageSrc) {
      setHideImg(false);
    } else {
      alert("Image does not exist");
    }

    setNoSrc(!image_alt);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowFullImage(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageSrc, image_alt]);

  const toggleFullImage = () => {
    setShowFullImage(!showFullImage);
  };

  return (
    <div className={`${styles.image_parent} ${noSrc ? styles.hide : ""}`}>
      <div className={`${styles.full_width} ${showFullImage ? styles.show : ""}`} onClick={toggleFullImage}>
        {showFullImage && (
          <>
            <div className={styles.cross} onClick={toggleFullImage}>
              <Image src={closeIcon} alt="Close" width={20} height={20} />
            </div>
            <Image
              id="fullImage"
              src={imageSrc}
              width={800}
              height={800}
              className={styles.full_image}
              alt={image_alt}
              onClick={(e) => e.stopPropagation()}
            />
          </>
        )}
      </div>
      <Image
        id="image"
        src={imageSrc}
        width={1000}
        height={1000}
        className={`${styles.image} ${hideImg ? styles.hide_img : ""} ${
          isMobile ? "" : styles.image_hover
        }`}
        alt={image_alt}
        onClick={toggleFullImage}
      />
    </div>
  );
}
