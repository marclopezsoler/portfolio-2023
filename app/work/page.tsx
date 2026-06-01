import dynamic from "next/dynamic";

const Work = dynamic(() => import("./WorkPage"), {
  ssr: false,
});

export default Work;
