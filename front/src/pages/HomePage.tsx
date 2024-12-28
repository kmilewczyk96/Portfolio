import {ReactElement} from "react";

import HeroSection from "../components/organisms/HeroSection.tsx";
import ProjectsDemoSection from "../components/organisms/ProjectsDemoSection.tsx";
import project1 from "../assets/dummyDBGallery/wallpapersden.com_forest-mountains_1920x1080.jpg";
import project2 from "../assets/dummyDBGallery/wallpapersden.com_dark-night-in-air-balloon_1920x1200.jpg";
import project3 from "../assets/dummyDBGallery/wallpapersden.com_city-digital-art_1920x1080.jpg";
import {projectTagTypes} from "../utils/enums.ts";
import {IProject} from "../utils/interfaces.ts";


const dummyProjects: IProject[] = [
  {
    id: "01",
    imgSource: project1,
    title: "Recipe App",
    tags: [
      {name: "Python", type: projectTagTypes.backend},
      {name: "Django REST Framework", type: projectTagTypes.backend},
      {name: "Django", type: projectTagTypes.backend},
      {name: "React", type: projectTagTypes.frontend},
      {name: "JavaScript", type: projectTagTypes.frontend},
      {name: "Docker", type: projectTagTypes.tool},
      {name: "AWS", type: projectTagTypes.tool},
      {name: "GitHub Actions", type: projectTagTypes.tool},
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "02",
    imgSource: project2,
    title: "Photomod",
    tags: [
      {name:"Python", type: projectTagTypes.backend},
      {name: "PyQt6", type: projectTagTypes.backend}
    ],
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
  },
  {
    id: "03",
    imgSource: project3,
    title: "Hangman",
    tags: [
      {name: "Python", type: projectTagTypes.backend},
      {name: "PyGame", type: projectTagTypes.backend}
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
]


export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection/>
      <ProjectsDemoSection projects={dummyProjects}/>
    </>
  );
}