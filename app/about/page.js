import dynamic from "next/dynamic";

const About = dynamic(() => import("./AboutPage"), {
  ssr: false,
});

export default About;
