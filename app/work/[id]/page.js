import works from '@/app/_data/data';
import styles from '@/public/styles/WorkDetail.module.scss';

export async function generateMetadata({ params }) {
  const work = works.find((work) => work.id === params.id);

  return {
    title: `${work.title} | marc lópez portfolio`,
  };
}

export default function WorkDetail({ params }) {
  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  const metadata = generateMetadata({ params });

  return (
    <div className={styles.main}>
      <p>Title: {work.title}</p>
      <p>ID: {work.id}</p>
      <img
        src={`/assets/images/work/${work.id}/image1.jpg`}
        alt={`Image for ${work.title}`}
      />
    </div>
  );
}
