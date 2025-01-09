import styles from "./ProjectsCarousel3D.module.css";

import {ReactElement, useState} from "react";

import ProjectCard from "../molecules/ProjectCard.tsx";
import {IProject} from "../../utils/interfaces.ts";


interface IProps {
  projects: IProject[],
}

enum classes {
  "next",
  "right",
  "active",
  "left",
  "prev",
}

export default function ProjectsCarousel3D({projects}: IProps): ReactElement {
  const carouselItems: IProject[] = projects.length >= 5 ? projects : (
    projects.concat(projects.map((project) => {
      return {...project, id: "alt" + project.id}
    }))
  )

  const [currentIndex, setCurrentIndex] = useState(1)

  function handleClick() {
    console.log(carouselItems.length)
    setCurrentIndex((prevState): number => prevState + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <ul className={styles.wrapper}>
      {carouselItems.map((project, index) => (
        <ProjectCard key={project.id} project={project} className={
          [styles.carouselCard, styles[classes[(index + currentIndex) % carouselItems.length]]].join(" ")
        }/>
      ))}
    </ul>
    </>
  );
}