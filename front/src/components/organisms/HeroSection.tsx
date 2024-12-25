import styles from "./HeroSection.module.css";

import {ReactElement} from "react";

import GlitchImage from "../atoms/GlitchImage.tsx";
import GlitchText from "../atoms/GlitchText.tsx";
import myPhoto from "../../assets/myPhotoB&W.png";
import {htmlTextTags} from "../../utils/enums.ts";


export default function HeroSection(): ReactElement {
  return (
    <section id={"heroSection"} className={styles.heroSection}>
      <div className={styles.aestheticA}/>
      <div className={styles.aestheticB}/>
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
            Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
            Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
            Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
            Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          </p>
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
    </section>
  );
};