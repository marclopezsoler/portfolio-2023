"use client";
import works from "@/app/_data/data";
import ImageComponent from "@/app/components/ImageComponent";
import styles from "@/public/styles/WorkDetail.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const work = works.find((work) => work.id === params.id);

  return {
    title: `${work.title} | marc lópez portfolio`,
    description: `Check out ${work.title}, and the rest of my works here!`,
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
      <Head>
        <title>{work.title} | marc lópez portfolio</title>
        <meta
          name="description"
          content="Check out {work.title}, and the rest of my works here!"
        />
        <meta name="theme-color" content="#020b55" />
        <link rel="icon" href="../../icon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.work_detail}>
        <section className={styles.landing_container}>
            <div className={styles.bg_image} style={{backgroundImage: `url(/assets/images/work/${work.id}/image1.jpg)`}}>
            <div className={styles.main_gradient}></div>
            <div className={styles.landing_text}>
              <h1>{work.title}</h1>
              <h2>{work.subtitle}</h2>
            </div>
          </div>
        </section>
        <section className={styles.first_section}>
          <div className={styles.work_type}><span>{work.type}</span></div>
          <div className={styles.detail_content}>
            <p className={styles.description}>{work.description}</p>
            <div className={styles.details}>
              <div>
                <span>roles</span>
                <p>{work.roles}</p>
              </div>
              <div>
                <span>date</span>
                <p>{work.date}</p>
              </div>
              <div>
                <span>client</span>
                <p>{work.client}</p>
              </div>
            </div>
          </div>
          <div className={styles.image2_parent}>
            <ImageComponent workId={work.id} image_alt={work.image2_alt} numberImg={2}/>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
