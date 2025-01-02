import styles from "./ContactSection.module.css";

import {ReactElement} from "react";

import GlitchText from "../atoms/GlitchText.tsx";
import ContactForm from "../molecules/ContactForm.tsx";
import {htmlTextTags} from "../../utils/enums.ts";


export default function ContactSection(): ReactElement {
  return (
    <section id={"contactSection"} className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        <GlitchText text={"Contact"} className={styles.sectionName} htmlTextTag={htmlTextTags.h3}/>
        <ContactForm/>
      </div>
    </section>
  );
}
