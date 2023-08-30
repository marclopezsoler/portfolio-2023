"use client";
import works from "@/app/_data/data";
import ImageComponent from "@/app/components/ImageComponent";
import NextWork from "@/app/components/NextWork";
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

  let nextWorkNum = 1;

  const highestNum = works.reduce(
    (max, work) => (work.num > max ? work.num : max),
    0
  );

  if (highestNum === work.num) {
    nextWorkNum = 1;
  } else {
    nextWorkNum = work.num + 1;
  }

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
          <div
            className={styles.bg_image}
            style={{
              backgroundImage: `url(/assets/images/work/${work.id}/image1.jpg)`,
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
            <div>
              <h2 className={styles.subtitle}>{work.subtitle}</h2>
              <p className={styles.description}>{work.description}</p>
            </div>
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
            <ImageComponent
              workId={work.id}
              image_alt={work.image2_alt}
              numberImg={2}
            />
          </div>
          <div className={styles.second_content}>
            <ImageComponent
              workId={work.id}
              image_alt={work.image3_alt}
              numberImg={3}
            />
            <div>
              <h2>{work.subtitle2}</h2>
              <p>{work.description2}</p>
            </div>
          </div>
          <div className={styles.third_content}>
            <h2>{work.subtitle3}</h2>
            <p>{work.description3}</p>
          </div>
          <div className={styles.images_group}>
            <ImageComponent
              workId={work.id}
              image_alt={work.image4_alt}
              numberImg={4}
            />
            <div className={styles.floating_image_1}>
              <ImageComponent
                workId={work.id}
                image_alt={work.image4_alt}
                numberImg={5}
              />
            </div>
          </div>
          <div className={styles.floating_image_2}>
            <ImageComponent
              workId={work.id}
              image_alt={work.image4_alt}
              numberImg={6}
            />
          </div>
        </section>
        <NextWork nextWork={nextWorkNum} />
      </div>
    </motion.div>
  );
}
