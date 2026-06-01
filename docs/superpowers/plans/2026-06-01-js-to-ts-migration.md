# JS → TS/TSX Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all 26 `.js` source files to `.ts`/`.tsx` with proper typed interfaces, no `any`.

**Architecture:** Create a central `app/types/index.ts` with the `Work` interface and all component prop types. Convert data file first (depended on by many components), then components bottom-up (leaves before consumers), then page components and route files last. Delete each `.js` file after creating its `.tsx` replacement — Next.js cannot have both `page.js` and `page.tsx` in the same directory.

**Tech Stack:** Next.js 13 App Router, React 18, TypeScript 5.8, `@types/react` 19, `@types/node` 25

---

## Task 1: Create central types file

**Files:**
- Create: `app/types/index.ts`

- [ ] **Step 1: Create `app/types/index.ts`**

```typescript
import { Dispatch, SetStateAction } from 'react';

export interface Work {
  num: number;
  id: string;
  title: string;
  subtitle1: string;
  category: string;
  type: string;
  description: string;
  roles: string;
  date: string;
  client: string;
  short_link: string;
  link: string;
  image1_alt: string;
  image2_alt: string;
  image3_alt: string;
  image4_alt: string;
  image5_alt: string;
  image6_alt: string;
  image7_alt: string;
}

export interface WorkCategoryProps {
  works: Work[];
  categoryType: string;
  hoveredItemId: string | null;
  setHoveredItemId: Dispatch<SetStateAction<string | null>>;
  localX: number;
  localY: number;
}

export interface WorkCategoryMobileProps {
  works: Work[];
  categoryType: string;
}

export interface ImageComponentProps {
  workId: string;
  image_alt: string;
  numberImg: number;
}

export interface NextWorkProps {
  nextWork: number;
  short_slug?: string;
}

export interface HighlightProps {
  title: string;
  filename_small: string;
  filename_big: string;
  subtitle: string;
  link: string;
  selected: number;
}

export interface IconProps {
  url: string;
  name: string;
}

export interface MyBestProps {
  title: string;
}

export interface SkillsProps {
  title: string;
  num: string;
}
```

- [ ] **Step 2: Verify file compiles**

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors related to `app/types/index.ts`

- [ ] **Step 3: Commit**

```bash
git add app/types/index.ts
git commit -m "feat: add central TypeScript types file"
```

---

## Task 2: Convert data file

**Files:**
- Create: `app/_data/data.ts`
- Delete: `app/_data/data.js`

- [ ] **Step 1: Create `app/_data/data.ts`**

Copy the full content of `app/_data/data.js` and add the type annotation:

```typescript
import { Work } from '@/app/types';

const works: Work[] = [
  // ... (keep all existing work objects unchanged)
];

export default works;
```

The existing array content does not change — only add the import and the `: Work[]` annotation on `const works`.

- [ ] **Step 2: Delete old file**

```bash
rm app/_data/data.js
```

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/_data/data.ts app/_data/data.js
git commit -m "feat: migrate data file to TypeScript"
```

---

## Task 3: Convert prop-less components

These four components have no props (or only `children`): `Header`, `Footer`, `Popup`, `Cursor`, `ContactForm`.

**Files:**
- Create: `app/components/Header.tsx`
- Create: `app/components/Footer.tsx`
- Create: `app/components/Popup.tsx`
- Create: `app/components/Cursor.tsx`
- Create: `app/components/ContactForm.tsx`
- Delete: each corresponding `.js` file

- [ ] **Step 1: Create `app/components/Header.tsx`**

Content is identical to `Header.js` — only change the file extension. No type annotations needed (no props, state types are inferred).

```bash
cp app/components/Header.js app/components/Header.tsx
rm app/components/Header.js
```

- [ ] **Step 2: Create `app/components/Footer.tsx`**

```bash
cp app/components/Footer.js app/components/Footer.tsx
rm app/components/Footer.js
```

- [ ] **Step 3: Create `app/components/Popup.tsx`**

```bash
cp app/components/Popup.js app/components/Popup.tsx
rm app/components/Popup.js
```

- [ ] **Step 4: Create `app/components/Cursor.tsx`**

```bash
cp app/components/Cursor.js app/components/Cursor.tsx
rm app/components/Cursor.js
```

- [ ] **Step 5: Create `app/components/ContactForm.tsx`**

The `useRef` call needs a type argument. Replace:

```tsx
const form = useRef();
```

with:

```tsx
const form = useRef<HTMLFormElement>(null);
```

Also update the `sendEmail` handler signature:

```tsx
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
```

Then create the file with these two changes applied and delete the original:

```bash
rm app/components/ContactForm.js
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors for the five converted components

- [ ] **Step 7: Commit**

```bash
git add app/components/Header.tsx app/components/Footer.tsx app/components/Popup.tsx app/components/Cursor.tsx app/components/ContactForm.tsx
git commit -m "feat: migrate prop-less components to TSX"
```

---

## Task 4: Convert simple-prop components

**Files:**
- Create: `app/components/MyBest.tsx`
- Create: `app/components/Skills.tsx`
- Create: `app/components/Icon.tsx`
- Create: `app/components/NextWork.tsx`
- Delete: each corresponding `.js` file

- [ ] **Step 1: Create `app/components/MyBest.tsx`**

```tsx
import styles from "@/public/styles/components/MyBest.module.scss";
import { MyBestProps } from "@/app/types";

export default function MyBest({ title }: MyBestProps) {
  return (
    <div className={styles.best_container}>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
}
```

```bash
rm app/components/MyBest.js
```

- [ ] **Step 2: Create `app/components/Skills.tsx`**

```tsx
import styles from "@/public/styles/components/Skills.module.scss";
import { SkillsProps } from "@/app/types";

export default function Skills({ title, num }: SkillsProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.bar_full} style={{ width: num }}></div>
      <p>{title}</p>
    </div>
  );
}
```

```bash
rm app/components/Skills.js
```

- [ ] **Step 3: Create `app/components/Icon.tsx`**

The original uses `require()` for dynamic image paths. Replace with a public folder string path (Next.js serves `/public` at the root):

```tsx
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
```

```bash
rm app/components/Icon.js
```

- [ ] **Step 4: Create `app/components/NextWork.tsx`**

```tsx
import Link from "next/link";
import styles from "@/public/styles/components/NextWork.module.scss";
import { isMobile } from "react-device-detect";
import { NextWorkProps } from "@/app/types";

export default function NextWork({ nextWork }: NextWorkProps) {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        like what you're seeing?<br></br>take a look at another work{" "}
        <span className={styles.link_parent}>
          <Link href={`/work/work${nextWork}`} className={styles.link}>
            here
          </Link>
          !<span className={`${styles.finger} ${isMobile ? styles.hide : ""}`}>👈</span>
        </span>
      </p>
    </div>
  );
}
```

```bash
rm app/components/NextWork.js
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors

- [ ] **Step 6: Commit**

```bash
git add app/components/MyBest.tsx app/components/Skills.tsx app/components/Icon.tsx app/components/NextWork.tsx
git commit -m "feat: migrate simple-prop components to TSX"
```

---

## Task 5: Convert complex components

**Files:**
- Create: `app/components/Highlight.tsx`
- Create: `app/components/ImageComponent.tsx`
- Create: `app/components/WorkCategory.tsx`
- Create: `app/components/WorkCategoryMobile.tsx`
- Delete: each corresponding `.js` file

- [ ] **Step 1: Create `app/components/Highlight.tsx`**

```tsx
import styles from "@/public/styles/components/Highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HighlightProps } from "@/app/types";

export default function Highlight({
  title,
  filename_small,
  filename_big,
  subtitle,
  link,
  selected,
}: HighlightProps) {
  return (
    <Link href={`/work/${link}`} className={styles.highlight_box}>
      <div className={styles.first_part}>
        <div className={styles.first_part_child}>
          <h2 className={styles.title}>{title}</h2>
          <Image
            src={`/assets/images/home/highlighted/${filename_small}`}
            width={350}
            height={350}
            className={styles.highlight_small_image}
            alt={title}
          />
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
      </div>
      <div
        className={styles.second_part}
        style={{
          backgroundImage: `url('/assets/images/home/highlighted/${filename_big}')`,
        }}
      >
        <span className={styles.selected}>
          selected <span className={styles.selected_num}>{selected}/2</span>
        </span>
      </div>
    </Link>
  );
}
```

```bash
rm app/components/Highlight.js
```

- [ ] **Step 2: Create `app/components/ImageComponent.tsx`**

Add types to `useRef`, state, and event handlers:

```tsx
"use client";
import Image from "next/image";
import styles from "@/public/styles/components/ImageComponent.module.scss";
import { useEffect, useState } from "react";
import closeIcon from "@/public/assets/icons/close.svg";
import { isMobile } from "react-device-detect";
import { ImageComponentProps } from "@/app/types";

export default function ImageComponent({ workId, image_alt, numberImg }: ImageComponentProps) {
  const [hideImg, setHideImg] = useState(true);
  const [noSrc, setNoSrc] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const jpgImagePath = `/assets/images/work/${workId}/image${numberImg}.jpg`;
  const gifImagePath = `/assets/images/work/${workId}/image${numberImg}.gif`;

  const imageSrc = numberImg === 4 ? gifImagePath : jpgImagePath;

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
      <div className={`${styles.full_width} ${showFullImage ? styles.show : ""}`}>
        {showFullImage && (
          <>
            <div className={styles.cross} onClick={toggleFullImage}>
              <Image src={closeIcon} alt="Close" width={30} height={30} />
            </div>
            <Image
              id="fullImage"
              src={imageSrc}
              width={800}
              height={800}
              className={styles.full_image}
              alt={image_alt}
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
```

```bash
rm app/components/ImageComponent.js
```

- [ ] **Step 3: Create `app/components/WorkCategory.tsx`**

```tsx
import styles from "@/public/styles/Work.module.scss";
import Image from "next/image";
import Link from "next/link";
import { WorkCategoryProps } from "@/app/types";

function WorkCategory({ works, categoryType, hoveredItemId, setHoveredItemId, localX, localY }: WorkCategoryProps) {
  return (
    <div id={categoryType} className={styles.work_type}>
      <h2 className={styles.category_type}>{categoryType}</h2>
      {works.map((work) =>
        work.category === categoryType ? (
          <button
            className={`${styles.workItem} ${
              hoveredItemId === work.id ? styles.opacity : ""
            }`}
            key={work.id}
            onMouseEnter={() => setHoveredItemId(work.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <Link href={`/work/${work.id}`} className={styles.link}>
              <p className={styles.title}>
                <span>{work.type}</span>
                <span className={styles.space}>/</span>
                {work.title}
              </p>
            </Link>
            <Image
              src={`/assets/images/work/${work.id}/image1.jpg`}
              width={600}
              height={600}
              className={styles.image}
              style={{
                left: `${localX - 250}px`,
                top: `${localY - 250}px`,
              }}
              alt={work.title}
            />
          </button>
        ) : null
      )}
    </div>
  );
}

export default WorkCategory;
```

```bash
rm app/components/WorkCategory.js
```

- [ ] **Step 4: Create `app/components/WorkCategoryMobile.tsx`**

```tsx
import styles from "@/public/styles/Work.module.scss";
import Link from "next/link";
import { WorkCategoryMobileProps } from "@/app/types";

function WorkCategoryMobile({ works, categoryType }: WorkCategoryMobileProps) {
  return (
    <div id={categoryType} className={styles.work_type_mobile}>
      <h2 className={styles.category_type}>{categoryType}</h2>
      {works.map((work) =>
        work.category === categoryType ? (
          <button className={styles.workItem_mobile} key={work.id}>
            <Link
              href={`/work/${work.id}`}
              className={styles.link}
              id={work.type}
            >
              <p className={styles.title}>
                <span>{work.type}</span>
                <span className={styles.space}>/</span>
                {work.title}
              </p>
            </Link>
          </button>
        ) : null
      )}
    </div>
  );
}

export default WorkCategoryMobile;
```

```bash
rm app/components/WorkCategoryMobile.js
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors

- [ ] **Step 6: Commit**

```bash
git add app/components/Highlight.tsx app/components/ImageComponent.tsx app/components/WorkCategory.tsx app/components/WorkCategoryMobile.tsx
git commit -m "feat: migrate complex components to TSX"
```

---

## Task 6: Convert page components

**Files:**
- Create: `app/HomePage.tsx`
- Create: `app/about/AboutPage.tsx`
- Create: `app/work/WorkPage.tsx`
- Create: `app/contact/ContactPage.tsx`
- Create: `app/work/[id]/WorkDetailPage.tsx`
- Delete: each corresponding `.js` file

- [ ] **Step 1: Create `app/HomePage.tsx`**

Content is identical to `HomePage.js` — state types are inferred, no props. Only change is the file extension:

```bash
cp app/HomePage.js app/HomePage.tsx
rm app/HomePage.js
```

- [ ] **Step 2: Create `app/about/AboutPage.tsx`**

Two changes from `AboutPage.js`:
1. Replace `require()` for profile image with a static import
2. Add explicit event handler type for the scroll listener

```tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import Skills from "../components/Skills";
import profilePic from "@/public/assets/images/about/profile_pic.png";
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
  const styleBg: React.CSSProperties = { top: combinedTop };

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
    const el = document.getElementById("word");
    if (el) el.innerHTML = values[index];
    index = ++index % values.length;
    setTimeout(change, 2000);
  };

  useEffect(() => {
    change();
  }, []);

  useEffect(() => {
    let count = sessionStorage.getItem("aboutLoads");
    const next = count === null ? 1 : Number(count) + 1;
    sessionStorage.setItem("aboutLoads", String(next));
    setContactLoads(next);
  }, []);

  return (
    // JSX body unchanged from AboutPage.js — replace src={require(...)} with src={profilePic}
    // All other JSX stays the same
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet title="about | marc lópez portfolio" />
      <div className={styles.main}>
        <div className={`${styles.content} ${count === 1 ? styles.animate_page : ""}`}>
          <div className={styles.first_content_parent}>
            <section className={styles.first_content}>
              <div className={styles.text_parent}>
                <h1 className={styles.title}>
                  IT'S ME,<br />
                  <b>marc lópez</b>
                </h1>
                <p className={styles.tag} id="word">
                  full stack developer
                </p>
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
            style={{ backgroundImage: 'url("/assets/images/about/profile_bg.jpg")' }}
          >
            <p style={styleBg}>
              I use my passion and skills to create visually appealing products
              and experiences.<br /><br />
              national customers rely on my experience to design and manage
              their digital products.
            </p>
          </section>
          <section className={styles.third_section}>
            <div className={styles.about}>
              <h2>who am I?</h2>
              <p>
                a multimedia bachelor graduate with a strong passion for
                combining <i>coding</i> and <i>design</i>.<br /><br />
                <b id={styles.time}>during my college years</b>, I honed my
                graphic design skills, creating captivating visuals and posters
                using Illustrator and Photoshop. I also freelanced on platforms
                like Fiverr. Additionally, I mastered website development with
                React and React Native, building numerous single-page
                applications.<br /><br />
                <b id={styles.time}>after graduating</b>, I continued to enhance
                my front and back-end skills. I delved into frameworks like
                Next.js, improved my proficiency in PHP and databases, and
                became well-versed in website hosting, deployment, and
                maintenance.<br /><br />
                <b id={styles.time}>my professional journey</b> began as a
                graphic designer and community manager for The Sideline football
                account, responsible for daily brand designs and social media
                content management.<br /><br />
                a year later, I embarked on an internship as a video editor,
                gaining expertise in video editing and file management.<br /><br />
                currently, I'm with Dfusió, a local communication agency, where
                I've evolved into a multimedia developer. Here, I build websites
                from scratch, maintain them, design various promotional
                materials, manage social media accounts, and analyze website and
                social media traffic using various analytics tools.
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
                truly love doing in my spare time<br /><br />
                <b>photography</b>,<br /><br />
                <b>basketball</b><br /><br />
                and...<br /><br />
                <b>generative art</b><br /><br />
                the first two hobbies help me disconnect from the daily routine,
                and also help me improve my creative skills (in photography) and
                show me how to be better while working with other people
                (basketball).<br /><br />
                finally, generative art is a hobby I discovered recently, and
                helps me connect coding and design on a really interesting way.
                I'm sure you'll hear about me soon talking more and more about
                generative art!
              </p>
            </div>
            <div className={styles.contact}>
              <p>
                do you want to know more about me?<br />
                then, let's get in touch
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
```

```bash
rm app/about/AboutPage.js
```

- [ ] **Step 3: Create `app/work/WorkPage.tsx`**

Content is identical to `WorkPage.js`. State types are inferred. Only change is the file extension:

```bash
cp app/work/WorkPage.js app/work/WorkPage.tsx
rm app/work/WorkPage.js
```

- [ ] **Step 4: Create `app/contact/ContactPage.tsx`**

Content is identical to `ContactPage.js`. State types are inferred:

```bash
cp app/contact/ContactPage.js app/contact/ContactPage.tsx
rm app/contact/ContactPage.js
```

- [ ] **Step 5: Create `app/work/[id]/WorkDetailPage.tsx`**

Add `params` type. The `generateMetadata` also needs `params` typed:

```tsx
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
            <ImageComponent workId={work.id} image_alt={work.image2_alt} numberImg={2} />
            <ImageComponent workId={work.id} image_alt={work.image3_alt} numberImg={3} />
            <ImageComponent workId={work.id} image_alt={work.image4_alt} numberImg={4} />
            <div className={styles.two_images}>
              <ImageComponent workId={work.id} image_alt={work.image5_alt} numberImg={5} />
              <ImageComponent workId={work.id} image_alt={work.image6_alt} numberImg={6} />
            </div>
            <ImageComponent workId={work.id} image_alt={work.image7_alt} numberImg={7} />
          </div>
        </section>
        <NextWork nextWork={nextWorkNum} />
      </div>
    </motion.div>
  );
}
```

```bash
rm "app/work/[id]/WorkDetailPage.js"
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors

- [ ] **Step 7: Commit**

```bash
git add app/HomePage.tsx app/about/AboutPage.tsx app/work/WorkPage.tsx app/contact/ContactPage.tsx "app/work/[id]/WorkDetailPage.tsx"
git commit -m "feat: migrate page components to TSX"
```

---

## Task 7: Convert Next.js route files and layout

**Files:**
- Create: `app/layout.tsx`
- Create: `app/not-found.tsx`
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/work/page.tsx`
- Create: `app/work/[id]/page.tsx`
- Delete: each corresponding `.js` file

- [ ] **Step 1: Create `app/layout.tsx`**

Add `children` type to `RootLayout`. Fix `crossorigin` → `crossOrigin` (JSX attribute name):

```tsx
"use client";

import Head from "next/head";
import Script from "next/script";
import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";
import "./globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="main">
      <Head>
        <title>marc lópez portfolio</title>
        <meta
          name="description"
          content="This is Marc López's portfolio website, where you can check all his projects and experience."
        />
        <meta name="theme-color" content="#020b55" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;800&display=swap"
          media="print"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          media="print"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CYPLVVSN8B`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYPLVVSN8B');
          `}
        </Script>
      </Head>
      <body>
        <section className="content">
          <Header />
          {isMobile ? <Popup /> : <Cursor />}
          <div className="main">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
```

```bash
rm app/layout.js
```

- [ ] **Step 2: Convert simple route files (rename only)**

These five files just re-export via `dynamic()` — no type additions needed:

```bash
cp app/page.js app/page.tsx && rm app/page.js
cp app/about/page.js app/about/page.tsx && rm app/about/page.js
cp app/contact/page.js app/contact/page.tsx && rm app/contact/page.js
cp app/work/page.js app/work/page.tsx && rm app/work/page.js
cp "app/work/[id]/page.js" "app/work/[id]/page.tsx" && rm "app/work/[id]/page.js"
```

- [ ] **Step 3: Convert `app/not-found.tsx`**

```bash
cp app/not-found.js app/not-found.tsx
rm app/not-found.js
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/not-found.tsx app/page.tsx app/about/page.tsx app/contact/page.tsx app/work/page.tsx "app/work/[id]/page.tsx"
git commit -m "feat: migrate route files and layout to TSX"
```

---

## Task 8: Final cleanup and verification

**Files:**
- Modify: `tsconfig.json`

- [ ] **Step 1: Confirm no `.js` source files remain**

```bash
find app -name "*.js" | grep -v node_modules
```

Expected: empty output (no JS files left in `app/`)

- [ ] **Step 2: Remove `allowJs` from tsconfig**

In `tsconfig.json`, change:

```json
"allowJs": true,
```

to:

```json
"allowJs": false,
```

- [ ] **Step 3: Full type check**

```bash
npx tsc --noEmit
```

Expected: exits 0, no output

- [ ] **Step 4: Dev build check**

```bash
npm run build 2>&1 | tail -20
```

Expected: build succeeds with no TypeScript errors

- [ ] **Step 5: Commit**

```bash
git add tsconfig.json
git commit -m "feat: complete JS→TSX migration, disable allowJs"
```
