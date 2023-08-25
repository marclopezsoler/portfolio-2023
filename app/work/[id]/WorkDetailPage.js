"use client";
import { motion } from "framer-motion";
import works from "@/app/_data/data";
import styles from "@/public/styles/WorkDetail.module.scss";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const work = works.find((work) => work.id === params.id);

  return {
    title: `${work.title} | marc lópez portfolio`,
  };
}

export default function WorkDetailPage({ params }) {
  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
   <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
    <div className={styles.main}>
      <p>Title: {work.title}</p>
      <p>ID: {work.id}</p>
      <Image
        src={`/assets/images/work/${work.id}/image1.jpg`}
        width={200}
        height={100}
        alt={`Image for ${work.title}`}
      />
    </div>
    </motion.div>
  );
}
