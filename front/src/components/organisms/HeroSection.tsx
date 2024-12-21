import styles from "./HeroSection.module.css";

import {ReactElement} from "react";

import myPhoto from "../../assets/myPhotoB&W.png"


export default function HeroSection(): ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.aestheticA}/>
      <div className={styles.aestheticB}/>
      <div className={styles.contentWrapper}>
        <div className={styles.personalInfoWrapper}>
          <p className={styles.title}>Python Developer</p>
          <h2>Karol Milewczyk</h2>
        </div>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={myPhoto} alt={"Photo of myself."}/>
        </div>
      </div>
    </section>
  );
};