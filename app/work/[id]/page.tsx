import dynamic from "next/dynamic";

const WorkDetail = dynamic(() => import("./WorkDetailPage"), {
  ssr: false,
});

export default WorkDetail;
