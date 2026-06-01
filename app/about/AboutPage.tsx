"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import profilePic from "@/public/assets/images/about/profile_pic.png";

import Icon from "../components/Icon";
import Skills from "../components/Skills";

import styles from "@/public/styles/About.module.scss";

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

  const styleBg: React.CSSProperties = {
    top: combinedTop,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    "and I'm an AI Product Engineer",
    "and I'm a Cloud & Infrastructure Engineer",
    "and I'm a Data Engineer",
    "and I'm a Cross-Platform Mobile Engineer",
    "and I'm a Frontend Engineer",
  ];
  let index = 0;

  const change = () => {
    document.getElementById("word").innerHTML = values[index];
    index = ++index % values.length;
    setTimeout(change, 5000);
  };

  useEffect(() => {
    change();
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("aboutLoads");
    const count = stored === null ? 1 : Number(stored) + 1;
    sessionStorage.setItem("aboutLoads", String(count));

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
                <div className={styles.tag_container}>
                  <span className={styles.tag_sizer} aria-hidden="true">
                    and I&apos;m a Cloud &amp; Infrastructure Engineer
                  </span>
                  <p className={styles.tag} id="word">
                    and I&apos;m an AI Product Engineer
                  </p>
                </div>
              </div>
              <Image
                src={profilePic}
                width={300}
                height={300}
                className={styles.image}
                alt="Marc López profile picture"
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
              I build intelligent, production-grade systems end-to-end — from AI
              orchestration and database architecture to cloud infrastructure
              and mobile apps.<br></br>
              <br></br>I design the environments, pipelines, and data layers
              that make excellent software.
            </p>
          </section>
          <section className={styles.third_section}>
            <div className={styles.about}>
              <h2>who am I?</h2>
              <p>
                a multimedia graduate with a postgraduate in full stack web
                technologies, currently working as a Full Stack Software
                Engineer at Polaris Technologies — building SaaS platforms,
                backend systems, and mobile apps.<br></br>
                <br></br>
                <b id={styles.time}>AI product engineering</b> is where I spend
                most of my time. I design and build intelligent platforms from
                scratch — architecting asynchronous LLM orchestration loops,
                managing state transitions across AI agents, and programming
                autonomous routines that power next-generation applications like
                Verbalizapp and Nexen.
                <br></br>
                <br></br>
                <b id={styles.time}>cloud & infrastructure</b> is the layer
                beneath everything I ship. I containerize with Docker, architect
                on GCP, manage secrets with Google Secret Manager, configure
                Cloud Storage Buckets, and route traffic through Cloudflare. I
                build the environment the application lives in.
                <br></br>
                <br></br>
                <b id={styles.time}>backend & data engineering</b> covers the
                complex system logic underneath. I model relational databases,
                integrate real-time and bulk third-party data streams, design
                custom OAuth architectures, and build advanced search mechanics
                including semantic search with pgvector and Elasticsearch.
                <br></br>
                <br></br>
                <b id={styles.time}>DevOps & release engineering</b> keeps
                delivery fast and reliable. I manage CI/CD pipelines with GitHub
                Actions and GitLab CI/CD, and provision self-hosted environment
                runners on local hardware — meaning I understand automation at
                the machine level, not just the config file.
                <br></br>
                <br></br>
                <b id={styles.time}>cross-platform mobile</b> proves I can pivot
                from deep backend architecture to client-facing experiences. I
                engineered and shipped production React Native apps to both the
                iOS App Store and Android Play Store, handling everything from
                performance optimization to store deployment.
              </p>
            </div>
            <div className={styles.skills_parent}>
              <h2>skills</h2>
              <div className={styles.skills}>
                <Skills title={"React & Next.js"} num="95%" />
                <Skills title={"React Native"} num="90%" />
                <Skills title={"LLM & AI Agents"} num="90%" />
                <Skills title={"Node.js & REST APIs"} num="90%" />
                <Skills title={"PostgreSQL & pgvector"} num="85%" />
                <Skills title={"Docker & CI/CD Pipelines"} num="85%" />
                <Skills title={"OAuth & Auth Systems"} num="80%" />
                <Skills title={"GCP & Cloud Architecture"} num="75%" />
              </div>
            </div>
            <div className={styles.tools}>
              <h2>tools</h2>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>languages</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"typescript.png"} name="typescript" />
                  <Icon url={"javascript.png"} name="javascript" />
                  <Icon url={"python.png"} name="python" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>frontend</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"react.png"} name="react" />
                  <Icon url={"nextjs.png"} name="next.js" />
                  <Icon url={"react.png"} name="react native" />
                  <Icon url={"sass.png"} name="sass" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>backend</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"nodejs.png"} name="node.js" />
                  <Icon url={"postgresql.png"} name="postgresql" />
                  <Icon url={"mongodb.png"} name="mongodb" />
                  <Icon url={"elasticsearch.png"} name="elasticsearch" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>cloud & devops</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"gcp.png"} name="gcp" />
                  <Icon url={"docker.png"} name="docker" />
                  <Icon url={"github.png"} name="github" />
                  <Icon url={"gitlab.png"} name="gitlab" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>AI</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"anthropic.png"} name="anthropic" />
                  <Icon url={"openai.png"} name="openai" />
                </div>
              </div>
              <div className={styles.tools_child}>
                <h3 className={styles.h3}>tools</h3>
                <div className={styles.tools_icon}>
                  <Icon url={"figma.png"} name="figma" />
                  <Icon url={"git.png"} name="git" />
                  <Icon url={"linear.png"} name="linear" />
                  <Icon url={"openapi.png"} name="openapi" />
                </div>
              </div>
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
