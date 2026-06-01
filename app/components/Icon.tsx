import Image from "next/image";
import styles from "@/public/styles/components/Icon.module.scss";
import { IconProps } from "@/app/types";

export default function Icon({ url, name }: IconProps) {
  return (
    <div className={styles.icon_parent}>
      <p>{name}</p>
      <Image
        src={`/assets/images/about/icons/${url}`}
        width={300}
        height={300}
        className={styles.icon}
        alt={name}
      />
    </div>
  );
}
