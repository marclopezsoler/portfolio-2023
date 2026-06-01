"use client";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import works from "@/app/_data/data";
import ImageComponent from "@/app/components/ImageComponent";
import NextWork from "@/app/components/NextWork";

import styles from "@/public/styles/WorkDetail.module.scss";

interface WorkDetailParams {
  params: { id: string };
}

export async function generateMetadata({ params }: WorkDetailParams) {
  const work = works.find((work) => work.id === params.id);
  return { title: work ? `${work.title} | marc lópez portfolio` : 'marc lópez portfolio' };
}

export default function WorkDetailPage({ params }: WorkDetailParams) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  const highestNum = works.reduce((max, w) => (w.num > max ? w.num : max), 0);
  const nextWorkNum = work.num === highestNum ? 1 : work.num + 1;

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet title={`${work.title} | marc lópez portfolio `} />
      <div className={styles.work_detail}>
        <section className={styles.landing_container}>
          <div
            className={styles.bg_image}
            style={{
              backgroundImage: `url(/assets/images/work/${work.id}/image1.${work.imageExt ?? 'jpg'})`,
            }}
          >
            <div className={styles.main_gradient}></div>
            <div className={styles.landing_text}>
              <h1>{work.title}</h1>
            </div>
          </div>
        </section>
        <section className={styles.first_section}>
          <div className={styles.work_type}>
            <span>{work.type}</span>
          </div>
          <div className={styles.detail_content}>
            <div className={styles.info}>
              <h2 id={styles.subtitle} className={styles.subtitle}>
                {work.subtitle1}
              </h2>
              <p className={styles.description} id={styles.p}>
                {work.description}
              </p>
            </div>
            <div className={styles.details}>
              <div className={work.roles ? "" : styles.hide}>
                <span id={styles.span}>roles</span>
                <p id={styles.p}>{work.roles}</p>
              </div>
              <div className={work.date ? "" : styles.hide}>
                <span id={styles.span}>date</span>
                <p id={styles.p}>{work.date}</p>
              </div>
              <div className={work.client ? "" : styles.hide}>
                <span id={styles.span}>client</span>
                <p id={styles.p}>{work.client}</p>
              </div>
              <div>
                <span
                  id={styles.span}
                  className={work.link === "" ? styles.hide : ""}
                >
                  link
                </span>
                <a
                  href={work.link}
                  id={styles.p}
                  target="_blank"
                  className={work.link === "" ? styles.hide : ""}
                >
                  {work.short_link}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.images_group}>
            <ImageComponent workId={work.id} image_alt={work.image2_alt} numberImg={2} imageExt={work.imageExt} />
            <ImageComponent workId={work.id} image_alt={work.image3_alt} numberImg={3} imageExt={work.imageExt} />
            <ImageComponent workId={work.id} image_alt={work.image4_alt} numberImg={4} imageExt={work.imageExt} />
            <div className={styles.two_images}>
              <ImageComponent workId={work.id} image_alt={work.image5_alt} numberImg={5} imageExt={work.imageExt} />
              <ImageComponent workId={work.id} image_alt={work.image6_alt} numberImg={6} imageExt={work.imageExt} />
            </div>
            <ImageComponent
              workId={work.id}
              image_alt={work.image7_alt}
              numberImg={7}
              imageExt={work.imageExt}
            />
          </div>
        </section>
        <NextWork nextWork={nextWorkNum} />
      </div>
    </motion.div>
  );
}
