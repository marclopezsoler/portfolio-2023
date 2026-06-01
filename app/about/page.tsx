import loadDynamic from "next/dynamic";

export const dynamic = "force-static";

const About = loadDynamic(() => import("./AboutPage"), {
  ssr: false,
});

export default About;
