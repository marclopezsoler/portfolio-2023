import Image from "next/image";
import styles from "@/public/styles/components/Icon.module.scss";

export default function Icon({ url, name }) {
  return (
    <div className={styles.icon_parent}>
      <p>{name}</p>
      <Image
      src={require(`/public/assets/images/about/icons/${url}`)}
      width={300}
      height={300}
      className={styles.icon}
    />
    </div>
  );
}
