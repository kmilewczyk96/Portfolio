import styles from "./ProjectsCarousel3D.module.css";

import {ReactElement, useState} from "react";

import CarouselButton, {direction} from "../atoms/CarouselButton.tsx";
import ProjectCard from "../molecules/ProjectCard.tsx";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  projects: IProject[],
}

enum classes {
  "prev",
  "left",
  "active",
  "right",
  "next",
}

export default function ProjectsCarousel3D({projects}: IProps): ReactElement {
  const carouselItems: IProject[] = projects.length >= 5 ? projects : (
    projects.concat(projects.map((project) => {
      return {...project, id: "alt" + project.id}
    }))
  )

  const [currentIndex, setCurrentIndex] = useState(1)

  function handleSpinRight(): void {
    setCurrentIndex((prevState): number => {
      if (prevState === 0) {
        return carouselItems.length - 1;
      }
      return (prevState - 1) % carouselItems.length;
    })
  }

  function handleSpinLeft(): void {
    setCurrentIndex((prevState): number => (prevState + 1) % carouselItems.length);
  }

  return (
    <div className={[styles.wrapper, "sectionInlineWrapper"].join(" ")}>
      <CarouselButton buttonFn={handleSpinLeft} direction={direction.left}/>
      <ul className={styles.carouselElements}>
        {carouselItems.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={(index + currentIndex) % carouselItems.length === classes.active}
            className={
              [styles.carouselCard, styles[classes[(index + currentIndex) % carouselItems.length]]].join(" ")
            }
          />
        ))}
      </ul>
      <CarouselButton buttonFn={handleSpinRight} direction={direction.right}/>
    </div>
  );
}