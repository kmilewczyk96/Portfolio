import styles from "./ContactSection.module.css";

import {
  ForwardedRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  forwardRef,
} from "react";

import ContactCard from "../molecules/ContactCard.tsx";
import ContactForm from "../molecules/ContactForm.tsx";
import Section from "../molecules/Section.tsx";


const ContactSection: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef(
  function ContactSection({}, ref: ForwardedRef<HTMLElement>): ReactElement {
    return (
      <Section sectionID={"contact"} title={"Contact"} ref={ref}>
        <div className={styles.contactWrapper}>
          <ContactCard className={styles.contactCard}/>
          <ContactForm className={styles.contactForm}/>
          <div className={styles.background}/>
        </div>
      </Section>
    );
  }
)
export default ContactSection;
