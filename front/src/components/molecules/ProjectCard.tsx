import styles from "./ProjectCard.module.css";

import {ReactElement} from "react";

import Button from "../atoms/Button.tsx";
import Marquee from "../atoms/Marquee.tsx";
import TagPill from "../atoms/TagPill.tsx";
import {IProject} from "@utils/interfaces";


interface IProps {
  project: IProject,
  className?: string | undefined,
}

export default function ProjectCard({project, className=undefined}: IProps): ReactElement {
  return (
    <article className={[styles.wrapper, className].join(" ")}>
      <div className={styles.imageWrapper}>
        <img src={project.photoURI} alt={`${project.title} project screenshot.`} className={styles.projectImage}/>
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.projectTitle}>{project.name}</h4>
        <Marquee
          className={styles.projectTags}
          elementsToDisplay={
          project.tags.map(tag => <TagPill name={tag.name} type={tag.role}/>)
        }/>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.actions}>
          <Button>Source Code</Button>
        </div>
      </div>
    </article>
  );
}
