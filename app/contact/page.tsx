import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./ContactPage"), {
  ssr: false,
});

export default Contact;
