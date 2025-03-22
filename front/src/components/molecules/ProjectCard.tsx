import styles from "./ProjectCard.module.css";

import {ReactElement, SyntheticEvent} from "react";

import Button from "../atoms/Button.tsx";
import Marquee from "../atoms/Marquee.tsx";
import TagPill from "../atoms/TagPill.tsx";
import {
  IProject,
  ITags
} from "../../utils/interfaces";
import fallback from "../../assets/fallback.jpg";


interface IProps {
  project: IProject,
  isActive: boolean,
  className?: string | undefined,
}

export default function ProjectCard({project, isActive=false, className=undefined}: IProps): ReactElement {
  function handleImgError(e: SyntheticEvent<HTMLImageElement, Event>): void {
    e.currentTarget.src = fallback;
  }

  return (
    <article className={[styles.wrapper, className].join(" ")}>
      <div className={styles.imageWrapper}>
        <img
          src={project.photoURI}
          onError={handleImgError}
          alt={`${project.name} project screenshot.`}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.projectTitle}>{project.name}</h4>
        <Marquee
          className={styles.projectTags}
          elementsToDisplay={
          project.tags.map((tag: ITags): ReactElement => <TagPill name={tag.name} type={tag.role}/>)
        }/>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.actions}>
          <Button
            goTo={project.source_code}
            className={styles.linkButton}
            disabled={!isActive}
          >Source Code
          </Button>
        </div>
      </div>
    </article>
  );
}
