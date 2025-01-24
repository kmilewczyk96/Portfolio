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
import myPhoto from "../../assets/myPhotoB&W.png";
import {htmlTextTags} from "../../utils/enums.ts";


const HeroSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function HeroSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
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
                Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
                Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
                Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
                Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
              </p>
              <Button onClick={() => {}}>Learn More</Button>
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
