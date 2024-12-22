import {ReactElement} from "react";

import HeroSection from "../components/organisms/HeroSection.tsx";
import ProjectsDemoSection from "../components/organisms/ProjectsDemoSection.tsx";


export default function HomePage(): ReactElement {
  return (
    <>
      <HeroSection/>
      <ProjectsDemoSection/>
    </>
  );
}