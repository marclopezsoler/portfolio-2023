import styles from "@/public/styles/components/Skills.module.scss";
import { SkillBar } from 'react-skills';


export default function Skills({title, num}){

   return(
      <SkillBar name={title} level={num*10} color="blue" classname={styles.skillsBar}/>
   )
}