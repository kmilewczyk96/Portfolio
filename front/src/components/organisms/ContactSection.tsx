import styles from "./ContactSection.module.css";

import {
  ForwardedRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

import GlitchText from "../atoms/GlitchText.tsx";
import ContactCard from "../molecules/ContactCard.tsx";
import ContactForm from "../molecules/ContactForm.tsx";
import Section from "../molecules/Section.tsx";
import {htmlTextTags} from "../../utils/enums.ts";


const ContactSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function ContactSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    return (
      <Section sectionID={"contact"} ref={ref}>
        <div className={styles.contentWrapper}>
          <GlitchText text={"Contact"} className={styles.sectionName} htmlTextTag={htmlTextTags.h3}/>
          <div className={styles.contactWrapper}>
            <ContactCard className={styles.contactCard}/>
            <ContactForm className={styles.contactForm}/>
            <div className={styles.background}/>
          </div>
        </div>
      </Section>
    );
  }
)
export default ContactSection;
