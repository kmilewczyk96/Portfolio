import styles from "./ProjectsDemoSection.module.css";

import {ReactElement} from "react";

import GlitchText from "../atoms/GlitchText.tsx";
import {htmlTextTags} from "../../utils/enums.ts";


export default function ProjectsDemoSection(): ReactElement {
  return (
    <section id={"projectsDemoSection"} className={styles.projectsDemoSection}>
      <div className={styles.contentWrapper}>
        <GlitchText
          text={"Projects"}
          className={styles.sectionName}
          htmlTextTag={htmlTextTags.h3}
          animationDelaySeconds={3}
        />
      </div>
    </section>
  );
};
