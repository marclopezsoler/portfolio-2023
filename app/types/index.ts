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
