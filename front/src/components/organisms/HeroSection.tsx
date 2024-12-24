import styles from "./HeroSection.module.css";

import {ReactElement} from "react";

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
        </div>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={myPhoto} alt={"Photo of myself."}/>
        </div>
      </div>
    </section>
  );
};