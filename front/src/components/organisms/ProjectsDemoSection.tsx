import styles from "./ProjectsDemoSection.module.css";

import {ReactElement} from "react";

import BaseWrapper from "../atoms/BaseWrapper.tsx";
import Button from "../atoms/Button.tsx";
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
          {projects.map(project => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </ul>
        <BaseWrapper contentAlignment={"center"} className={styles.actions}>
          <Button onClick={() => {}}>More</Button>
        </BaseWrapper>
      </div>
    </section>
  );
};
