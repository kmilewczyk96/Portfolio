import styles from "./ProjectCard.module.css";

import {ReactElement} from "react";

import Button from "../atoms/Button.tsx";
import Marquee from "../atoms/Marquee.tsx";
import TagPill from "../atoms/TagPill.tsx";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  project: IProject,
  className?: string | undefined,
}

export default function ProjectCard({project, className=undefined}: IProps): ReactElement {
  return (
    <article className={[styles.wrapper, className].join(" ")}>
      <div className={styles.imageWrapper}>
        <img src={project.imgSource} alt={`${project.title} project screenshot.`} className={styles.projectImage}/>
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <Marquee
          className={styles.projectTags}
          elementsToDisplay={
          project.tags.map(tag => <TagPill name={tag.name} type={tag.type}/>)
        }/>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.actions}>
          <Button onClick={() => {}}>Source Code</Button>
        </div>
      </div>
    </article>
  );
}
