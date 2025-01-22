import styles from "./ProjectsCarousel3D.module.css";

import {ReactElement, useState} from "react";

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
  // TODO: disable all cards except active one!
  const carouselItems: IProject[] = projects.length >= 5 ? projects : (
    projects.concat(projects.map((project) => {
      return {...project, id: "alt" + project.id}
    }))
  )

  const [currentIndex, setCurrentIndex] = useState(1)

  function handleSpinRight() {
    setCurrentIndex((prevState): number => {
      if (prevState === 0) {
        return carouselItems.length - 1;
      }
      return (prevState - 1) % carouselItems.length;
    })
  }

  function handleSpinLeft() {
    setCurrentIndex((prevState): number => (prevState + 1) % carouselItems.length);
  }

  return (
    <div className={styles.wrapper}>
      <button className={[styles.chevronBtn, styles.chevronBtnLeft].join(" ")} onClick={handleSpinLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242424" viewBox="0 0 256 256">
          <path
            d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>
        </svg>
      </button>
      <ul className={styles.carouselElements}>
        {carouselItems.map((project, index) => (
          <ProjectCard key={project.id} project={project} className={
            [styles.carouselCard, styles[classes[(index + currentIndex) % carouselItems.length]]].join(" ")
          }/>
        ))}
      </ul>
      <button className={[styles.chevronBtn, styles.chevronBtnRight].join(" ")} onClick={handleSpinRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242424" viewBox="0 0 256 256">
          <path
            d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>
        </svg>
      </button>
    </div>
  );
}