// components/DynamicAboutPage.js
import dynamic from "next/dynamic";

const About = dynamic(() => import("./AboutPage"), {
  ssr: false, // Render on the client side only
});

export default About;
