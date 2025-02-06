import styles from "./HeroSection.module.css";

import {
  ForwardedRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

import Button from "../atoms/Button.tsx";
import GlitchImage from "../atoms/GlitchImage.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import Section from "../molecules/Section.tsx";
import myPhoto from "../../assets/myPhoto.webp";
import {htmlTextTags} from "../../utils/enums.ts";


const HeroSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function HeroSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    function handleClick(): void {
      document.getElementById('projects')!.scrollIntoView();
    }

    return (
      <Section sectionID={"home"} ref={ref} className={styles.heroSection}>
        <>
          <div className={[styles.contentWrapper, "sectionInlineWrapper"].join(" ")}>
            <div className={styles.personalInfoWrapper}>
              <p className={styles.title}>Python Developer</p>
              <GlitchText
                text={"Karol Milewczyk"}
                htmlTextTag={htmlTextTags.h2}
                className={styles.name}
                animationDelaySeconds={3}
              />
              <p className={styles.description}>
                Hi! I am a Software Developer proficient with Python and TypeScript.<br/>
                I have experience with libraries such as Django, DRF, FastAPI, PyQt and React.
                I'm strongly focused on applying best practices, writing clean and maintainable code.
                I'm always eager to broaden my skills (both technical and soft).<br/>
                I hope you enjoy browsing my website and consider filling contact form attached at the very end of the page.
              </p>
              <Button className={styles.cta} onClick={handleClick}>Learn More</Button>
            </div>
            <div className={styles.photoWrapper}>
              <GlitchImage
                imageSource={myPhoto}
                imageAltText={"My photo."}
                className={styles.photo}
                animationDelaySeconds={3}
              />
            </div>
          </div>
        </>
      </Section>
    );
  }
);
export default HeroSection;
