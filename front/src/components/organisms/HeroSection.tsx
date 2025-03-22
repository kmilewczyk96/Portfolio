import styles from "./HeroSection.module.css";

import {
  ForwardedRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

import GlitchButton from "../atoms/GlitchButton.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import Section from "../molecules/Section.tsx";
import {htmlTextTags} from "../../utils/enums.ts";


const HeroSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function HeroSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    function handleClick(): void {
      document.getElementById('projects')!.scrollIntoView();
    }

    return (
      <Section sectionID={"home"} ref={ref} className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.personalInfoWrapper}>
            <p className={styles.title}>Python Developer</p>
            <GlitchText
              text={"Karol Milewczyk"}
              htmlTextTag={htmlTextTags.h2}
              className={styles.name}
              animationDelaySeconds={3}
            />
            <p className={styles.description}>
              Hi! I am a Full-Stack Developer proficient with Python and TypeScript.
              I'm strongly focused on applying best practices, writing clean and maintainable code.
              I'm always eager to broaden my skills (both technical and soft).
            </p>
            <GlitchButton text={"Learn More"} className={styles.cta} onClick={handleClick}/>
          </div>
        </div>
      </Section>
    );
  }
);
export default HeroSection;
