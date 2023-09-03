const works = [
  {
    num: 1,
    id: "work1",
    title: "tmdb",
    subtitle1: "university project that simulates the original tmdb site",
    category: "developing",
    type: "full stack",
    description:
      "This project was developed using React and The Movies DataBase api to fetch data in order to create a website with many features.",
    roles: "frontend, backend, ui, logo design",
    date: "2022",
    client: "uni",
    short_link: "marc's movie db",
    link: "https://tmdb.oddsolutionslab.com",
    image1_alt: "tmdb logo",
    image2_alt: "tmdb home page",
    image3_alt: "tmdb movie detail page",
    image4_alt: "tmdb video showcase",
    image5_alt: "tmdb responsive home page",
    image6_alt: "tmdb repsonsive movie detail page",
    image7_alt: "tmdb search results page",
  },
  {
    num: 2,
    id: "work2",
    title: "the sideline",
    subtitle1: "football designgs for 'The Sideline' Instagram page",
    category: "design",
    type: "social media",
    description:
      "The main tasks I took were collaborating with the creation of the brand, creating the logo and corporative image, as well as designing all the banners and videos that were posted into social media.",
    roles: "frontend, backend, logo design",
    date: "2021",
    client: "work",
    short_link: "",
    link: "",
    image1_alt: "newspaper design",
    image2_alt: "locker room design",
    image3_alt: "team of the week design",
    image4_alt: "player of the week video",
    image5_alt: "stories game recap 1",
    image6_alt: "stories game recap 2",
    image7_alt: "player of the week design 2",
  },
  {
    num: 3,
    id: "work3",
    title: "lattelab",
    subtitle1: "simulation of a real life project",
    category: "developing",
    type: "frontend",
    description:
      "Lattelab is a project that simulates a client need that goes from brand design to website developing. This single page website was done using React and shows all the features from the ficticious brand, such as their products, their mission, their locations and contact.",
    roles: "frontend, ui, logo design",
    date: "2023",
    client: "personal",
    short_link: "lattelab site",
    link: "https://lattelab.oddsolutionslab.com/",
    image1_alt: "lattelab landing",
    image2_alt: "about us",
    image3_alt: "",
    image4_alt: "landing video",
    image5_alt: "our mission",
    image6_alt: "find us",
    image7_alt: "",
  },
  {
    num: 4,
    id: "work4",
    title: "happenin' app",
    subtitle1: "",
    category: "developing",
    type: "full stack",
    description: "",
    roles: "frontend, backend, ui, logo design",
    date: "2023",
    client: "uni",
    short_link: "github repo",
    link: "https://github.com/eudaldmoya/Happenin",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 5,
    id: "work5",
    title: "generative splatter paintings",
    subtitle1: "",
    category: "developing",
    type: "generative art",
    description: "",
    roles: "",
    date: "2022-2023",
    client: "uni",
    short_link: "trailer video",
    link: "https://www.youtube.com/watch?v=nQFbTK_jLtU",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 6,
    id: "work6",
    title: "seo for various sites",
    subtitle1: "",
    category: "other",
    type: "seo",
    description: "",
    roles: "",
    date: "2022-2023",
    client: "work",
    short_link: "",
    link: "",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 7,
    id: "work7",
    title: "frontend practices",
    subtitle1: "",
    category: "dev",
    type: "frontend",
    description: "",
    roles: "",
    date: "2021-2023",
    client: "personal",
    short_link: "",
    link: "",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 8,
    id: "work8",
    title: "oporto",
    subtitle1: "",
    category: "other",
    type: "photography",
    description: "",
    roles: "photography, editing",
    date: "2023",
    client: "personal",
    short_link: "",
    link: "",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 9,
    id: "work9",
    title: "sports graphics",
    subtitle1: "",
    category: "design",
    type: "graphic design",
    description: "",
    roles: "",
    date: "2019-2023",
    client: "personal",
    short_link: "",
    link: "",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 10,
    id: "work10",
    title: "instagram clone",
    subtitle1: "",
    category: "developing",
    type: "full stack",
    description: "",
    roles: "",
    date: "2021",
    client: "uni",
    short_link: "instagram clone",
    link: "https://citmalumnes.upc.es/~marclis/bbdd/P04/",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 11,
    id: "work11",
    title: "3d elements",
    subtitle1: "",
    category: "other",
    type: "3d",
    description: "",
    roles: "",
    date: "2019-2022",
    client: "personal",
    short_link: "",
    link: "",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
  {
    num: 12,
    id: "work12",
    title: "doin' it",
    subtitle1: "",
    category: "developing",
    type: "full stack",
    description: "",
    roles: "frontend, backend, ui, logo design",
    date: "2023",
    client: "personal",
    short_link: "doin' it site",
    link: "http://doinit.oddsolutionslab.com/",
    image1_alt: "",
    image2_alt: "",
    image3_alt: "",
    image4_alt: "",
    image5_alt: "",
    image6_alt: "",
    image7_alt: "",
  },
];

export default works;
