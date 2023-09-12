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
  const [count, setContactLoads] = useState(0);

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

  const combinedTop = `calc(20% + ${0.3 * scrollY}px)`;

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

  useEffect(() => {
    let count = sessionStorage.getItem("aboutLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("aboutLoads", count);

    setContactLoads(count);
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
        <div
          className={`${styles.content} ${
            count === 1 ? styles.animate_page : ""
          }`}
        >
          <div className={styles.first_content_parent}>
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
          </div>
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
                a multimedia bachelor graduate with a strong passion for
                combining <i>coding</i> and <i>design</i>.<br></br>
                <br></br>
                <b id={styles.time}>during my college years</b>, I honed my
                graphic design skills, creating captivating visuals and posters
                using Illustrator and Photoshop. I also freelanced on platforms
                like Fiverr. Additionally, I mastered website development with
                React and React Native, building numerous single-page
                applications.
                <br></br>
                <br></br>
                <b id={styles.time}>after graduating</b>, I continued to enhance
                my front and back-end skills. I delved into frameworks like
                Next.js, improved my proficiency in PHP and databases, and
                became well-versed in website hosting, deployment, and
                maintenance.
                <br></br>
                <br></br>
                <b id={styles.time}>my professional journey</b> began as a
                graphic designer and community manager for The Sideline football
                account, responsible for daily brand designs and social media
                content management.<br></br>
                <br></br>a year later, I embarked on an internship as a video
                editor, gaining expertise in video editing and file management.
                <br></br>
                <br></br>currently, I'm with Dfusió, a local communication
                agency, where I've evolved into a multimedia developer. Here, I
                build websites from scratch, maintain them, design various
                promotional materials, manage social media accounts, and analyze
                website and social media traffic using various analytics tools.
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
                <h3 className={styles.h3}>developing</h3>
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
                  <Icon url={"processing.png"} name="processing" />
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
            <div className={styles.hobbies}>
              <h2>hobbies</h2>
              <p>
                apart from designing and developing, there are three things I
                truly love doing in my spare time<br></br>
                <br></br>
                <b>photography</b>,<br></br>
                <br></br>
                <b>basketball</b>
                <br></br>
                <br></br>and...<br></br>
                <br></br>
                <b>generative art</b>
                <br></br>
                <br></br>the first two hobbies help me disconnect from the daily
                routine, and also help me improve my creative skills (in
                photohtaphy) and show me how to be better while working with
                other people (basketball).
                <br></br>
                <br></br>finally, generative art is a hobby I discovered
                recenlty, and helps me connect coding and design on a really
                interesting way. I'm sure you'll hear about me soon talking more
                and more about generative art!
              </p>
            </div>
            <div className={styles.contact}>
              <p>
                do you want to know more about me?<br></br>then, let's get in
                touch
              </p>
              <Link href="/contact" className={styles.link}>
                CONTACT ME
              </Link>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
