import {ReactElement, RefObject, useEffect, useRef, useState} from "react";

import ContactSection from "./components/organisms/ContactSection.tsx";
import HeroSection from "./components/organisms/HeroSection.tsx";
import MainNavbar from "./components/organisms/MainNavbar.tsx";
import ProjectsDemoSection from "./components/organisms/ProjectsDemoSection.tsx";
import {ISection} from "./utils/interfaces";


const sections: ISection[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'projects', label: 'Projects'},
  {id: 'contact', label: 'Contact'},
]

function App(): ReactElement {
  const heroRef: RefObject<HTMLElement> = useRef(null);
  const projectsRef: RefObject<HTMLElement> = useRef(null);
  const contactRef: RefObject<HTMLElement> = useRef(null);
  const refs: RefObject<HTMLElement>[] = [heroRef, projectsRef, contactRef];
  const [activeSectionID, setActiveSectionID] = useState("");

  function intersectionAction(entries: IntersectionObserverEntry[]): void {
    if (entries.length !== 1) {
      for (let i: number=0; i < entries.length; i++) {
        entries[i].isIntersecting && setActiveSectionID(entries[i].target.id);
      }
      return;
    }
    const [entry] = entries;
    entry.isIntersecting && setActiveSectionID(entry.target.id);

    if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
      entry.target.classList.add("snapToStart");
    } else if (entry.isIntersecting && entry.boundingClientRect.top < 0) {
      entry.target.classList.add("snapToEnd");
    } else {
      refs.forEach(ref => ref.current?.classList.remove("snapToStart"));
      refs.forEach(ref => ref.current?.classList.remove("snapToEnd"));
    }
  }

  const options = {
    root: null,
    rootMargin: "-50px 0px",
    threshold: [0],
  }

  useEffect((): () => void => {
    const observer = new IntersectionObserver(intersectionAction, options);
    refs.forEach(
      ref => observer.observe(ref.current!)
    );
    return (): void => refs.forEach(ref => observer.unobserve(ref.current!));
  }, []);

  return (
    <>
      <div id={"snow"}/>
      <div id={"vignette"}/>
      <HeroSection ref={heroRef}/>
      <MainNavbar sections={sections} activeSectionID={activeSectionID}/>
      <ProjectsDemoSection ref={projectsRef}/>
      <ContactSection ref={contactRef}/>
    </>
  );
}

export default App;
