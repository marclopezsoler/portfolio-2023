"use client";
import styles from "@/public/styles/About.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Skills from "../components/Skills";
import Icon from "../components/Icon";

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
      const y = window.scrollY - height;
      setScrollY(y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const combinedTop = `calc(20% + ${0.15 * scrollY}px)`;

  const styleBg = {
    top: combinedTop,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    "and I'm a full stack developer",
    "and I'm a generative artist",
    "and I'm a community manager",
    "and I'm a graphic designer",
    "and I'm a content creator",
  ];
  let index = 0;

  const change = () => {
    document.getElementById("word").innerHTML = values[index];
    index = ++index % values.length;
    setTimeout(change, 2000);
  };

  useEffect(() => {
    change();
  }, []);

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet title="about | marc lópez portfolio" />
      <div className={styles.main}>
        {/* UNDER DEVELOPMENT */}
        {/* <h1 className={styles.title}>
          This page is still under development, stay tuned!
        </h1>
        <Link href="https://marclopez.xyz/" className={styles.link}>
          BACK TO HOME
        </Link> */}
        <div className={styles.content}>
          <section className={styles.first_content}>
            <div className={styles.text_parent}>
              <h1 className={styles.title}>
                IT'S ME,<br></br>
                <b>marc lópez</b>
              </h1>
              <p className={styles.tag} id="word">
                full stack developer
              </p>
            </div>
            <Image
              src={require(`/public/assets/images/about/profile_pic.png`)}
              width={300}
              height={300}
              className={styles.image}
            />
          </section>
          <section
            className={styles.second_content}
            style={{
              backgroundImage: 'url("/assets/images/about/profile_bg.jpg")',
            }}
          >
            <p style={styleBg}>
              I use my passion and skills to create visually appealing products
              and experiences.<br></br>
              <br></br>national customers rely on my experience to design and
              manage their digital products.
            </p>
          </section>
          <section className={styles.third_section}>
            <div className={styles.about}>
              <h2>who am I?</h2>
              <p>
                a recenlty graduated from the multimedia bachelor who is
                passionate about the combination of coding and design.
              </p>
            </div>
            <div className={styles.skills_parent}>
              <h2>skills</h2>
              <div className={styles.skills}>
                <Skills title={"front-end"} num="90%" />
                <Skills title={"back-end"} num="75%" />
                <Skills title={"generative art"} num="80%" />
                <Skills title={"image postprocessing"} num="90%" />
                <Skills title={"graphic design"} num="85%" />
                <Skills title={"UI design"} num="85%" />
                <Skills title={"SEO"} num="80%" />
                <Skills title={"social media"} num="90%" />
              </div>
            </div>
            <div className={styles.tools}>
              <h2>tools</h2>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>front and back end</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"javascript.png"} name="javascript" />
                  <Icon url={"sass.png"} name="sass" />
                  <Icon url={"php.svg"} name="php" />
                  <Icon url={"mysql.svg"} name="mysql" />
                  <Icon url={"reactjs.png"} name="react.js" />
                  <Icon url={"nextjs.png"} name="next.js" />
                  <Icon url={"nodejs.png"} name="node.js" />
                  <Icon url={"npm.png"} name="npm" />
                  <Icon url={"git.png"} name="git" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>design & photography</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"figma.png"} name="figma" />
                  <Icon url={"illustrator.png"} name="illustrator" />
                  <Icon url={"lightroom.png"} name="lightroom" />
                  <Icon url={"photoshop.png"} name="photoshop" />
                  <Icon url={"xd.png"} name="adobe xd" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>cms & plugins</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"drupal.png"} name="drupal" />
                  <Icon url={"wordpress.png"} name="wordpress" />
                  <Icon url={"divi.png"} name="divi" />
                  <Icon url={"elementor.png"} name="elementor" />
                  <Icon url={"salient.png"} name="salient" />
                  <Icon url={"yoast.png"} name="yoast seo" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>others</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"processing.png"} name="processing" />
                  <Icon url={"mailchimp.jpg"} name="mailchimp" />
                  <Icon url={"analytics.png"} name="analytics" />
                  <Icon url={"mybusiness.jpg"} name="my business" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
