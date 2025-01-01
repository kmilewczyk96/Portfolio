import styles from "./ProjectCard.module.css";

import {ReactElement} from "react";

import Button from "../atoms/Button.tsx";
import Marquee from "../atoms/Marquee.tsx";
import TagPill from "../atoms/TagPill.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import {htmlTextTags} from "../../utils/enums.ts";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  project: IProject,
  titleAnimationDelay?: number
}

export default function ProjectCard({project, titleAnimationDelay=0}: IProps): ReactElement {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={project.imgSource} alt={`${project.title} project screenshot.`} className={styles.projectImage}/>
      </div>
      <div className={styles.infoWrapper}>
        <GlitchText text={project.title} className={styles.projectTitle} htmlTextTag={htmlTextTags.h4} animationDelaySeconds={titleAnimationDelay}/>
        <Marquee
          className={styles.projectTags}
          elementsToDisplay={
          project.tags.map(tag => <TagPill name={tag.name} type={tag.type}/>)
        }/>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.actions}>
          <Button onClick={() => {}}>Details</Button>
        </div>
      </div>
    </article>
  );
}
