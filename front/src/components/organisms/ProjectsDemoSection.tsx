import styles from "./ProjectsDemoSection.module.css";

import {ReactElement} from "react";

import GlitchText from "../atoms/GlitchText.tsx";
import ProjectCard from "../molecules/ProjectCard.tsx";
import {htmlTextTags} from "../../utils/enums.ts";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  projects: IProject[]
}

export default function ProjectsDemoSection({projects}: IProps): ReactElement {
  return (
    <section id={"projectsDemoSection"} className={styles.projectsDemoSection}>
      <div className={styles.contentWrapper}>
        <GlitchText
          text={"Projects"}
          className={styles.sectionName}
          htmlTextTag={htmlTextTags.h3}
        />
        <ul className={styles.projectsShowcase}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} titleAnimationDelay={index * 0.5 + 2}/>
          ))}
        </ul>
      </div>
    </section>
  );
};
