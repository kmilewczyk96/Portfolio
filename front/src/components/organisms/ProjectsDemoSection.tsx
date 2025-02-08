import styles from "./ProjectsDemoSection.module.css";

import {ForwardedRef, forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes,} from "react";

import ProjectsCarousel3D from "./ProjectsCarousel3D.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import Spinner from "../atoms/Spinner.tsx";
import ProjectCard from "../molecules/ProjectCard.tsx";
import Section from "../molecules/Section.tsx";
import {useRequest} from "../../hooks/useRequest.ts";
import {htmlTextTags, httpRequestMethods} from "../../utils/enums.ts";
import {IProject} from "../../utils/interfaces.ts";


const ProjectsDemoSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function ProjectsDemoSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    const [isFetching, error, fetchedData, _] = useRequest({
      url: (import.meta.env.VITE_API_URL || "/api") + "/projects",
      method: httpRequestMethods.get,
    });

    let content: ReactElement;
    if (isFetching) {
      content = (
        <div className={"center"}>
          <GlitchText
            text={"Loading"}
            className={[styles.message, styles.loading].join(" ")}
            htmlTextTag={htmlTextTags.p}
            animationDelaySeconds={2}
          />
          <Spinner/>
        </div>
      );
    } else {
      if (error?.message) {
        // TODO: style error page.
        content = (
          <div className={"center"}>
            <p>{error.message}</p>
          </div>
        );
      } else {
        content = <>
          {fetchedData.length <= 2 ? (
            <ul className={styles.projectsShowcase}>
              {fetchedData.map((project: IProject): ReactElement => (
                <ProjectCard key={project.id} isActive={true} project={project}/>
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