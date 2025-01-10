import styles from "./ProjectsDemoSection.module.css";

import {ReactElement} from "react";

import ProjectsCarousel3D from "./ProjectsCarousel3D.tsx";
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
        {projects.length <= 2 ? (
          <ul className={styles.projectsShowcase}>
            {projects.map((project: IProject): ReactElement => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </ul>
        ) : (
          <ProjectsCarousel3D projects={projects}/>
        )}
      </div>
    </section>
  );
};
