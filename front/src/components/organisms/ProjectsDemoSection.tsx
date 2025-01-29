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
import {useFetch} from "@hooks/useFetch.ts";
import {htmlTextTags} from "@utils/enums.ts";
import {fetchProjects} from "@utils/httpRequests.ts";
import {IProject} from "@utils/interfaces.ts";


const ProjectsDemoSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function ProjectsDemoSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    const [isFetching, error, fetchedData] = useFetch(fetchProjects);

    let content: ReactElement;
    if (isFetching) {
      // TODO: Project spinner.
      content = <div>Loading...</div>;
    } else {
      if (error?.message) {
        // TODO: style error page.
        content = (
          <div className={"center"}>
            <p>{error.message}</p>
            <p>ERROR</p>
          </div>
        );
      } else {
        content = <>
          {fetchedData.length <= 2 ? (
            <ul className={styles.projectsShowcase}>
              {fetchedData.map((project: IProject): ReactElement => (
                <ProjectCard key={project.id} project={project}/>
              ))}
            </ul>
          ) : (
            <ProjectsCarousel3D projects={fetchedData}/>
          )}
        </>
      }
    }

    return (
      <Section sectionID={"projects"} ref={ref}>
        <div className={[styles.contentWrapper, "sectionInlineWrapper"].join(" ")}>
          <GlitchText
            text={"Projects"}
            className={styles.sectionName}
            htmlTextTag={htmlTextTags.h3}
          />
          {content}
        </div>
      </Section>
    );
  }
);
export default ProjectsDemoSection;