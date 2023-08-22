import works from "@/app/_data/data";

export async function generateMetadata({ params }) {
  const work = works.find((work) => work.id === params.id);
 
  return {
    title: ` ${work.title} | marc lópez portfolio`,
  };
}

export default function WorkDetail({ params }) {
  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <p>Title: {work.title}</p>
      <p>ID: {work.id}</p>
      {/* <img src={work.image1}/> */}
      <img
        src={`/assets/${work.id}/image1.jpg`}
        alt={`Image for ${work.title}`}
      />
    </div>
  );
}
