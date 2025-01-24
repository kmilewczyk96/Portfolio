import styles from "./ProjectsDemoSection.module.css";

import {
  ForwardedRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

import ProjectsCarousel3D from "./ProjectsCarousel3D.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import ProjectCard from "../molecules/ProjectCard.tsx";
import Section from "../molecules/Section.tsx";
import {htmlTextTags} from "../../utils/enums.ts";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  projects: IProject[],
}

const ProjectsDemoSection: ForwardRefExoticComponent<IProps & RefAttributes<HTMLElement>> = forwardRef(
  function ProjectsDemoSection({projects}: IProps, ref: ForwardedRef<HTMLElement>): ReactElement {
    return (
      <Section sectionID={"projects"} ref={ref}>
        <div className={[styles.contentWrapper, "sectionInlineWrapper"].join(" ")}>
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
      </Section>
    );
  }
);
export default ProjectsDemoSection;