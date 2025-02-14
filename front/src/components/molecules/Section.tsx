import styles from "./Section.module.css";

import {ForwardedRef, forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes,} from "react";

import GlitchText from "../atoms/GlitchText.tsx";
import {htmlTextTags} from "../../utils/enums.ts";


interface IProps {
  sectionID: string,
  title?: string,
  className?: string | undefined,
  children: ReactElement,
}

const Section: ForwardRefExoticComponent<IProps & RefAttributes<HTMLElement>> = forwardRef(
  function Section({sectionID, title, className = undefined, children}: IProps, ref: ForwardedRef<HTMLElement>): ReactElement {
    return (
      <section id={sectionID} className={className ? className : styles.wrapper} ref={ref}>
        {title && <GlitchText text={title} className={styles.title} htmlTextTag={htmlTextTags.h2}/>}
        {children}
      </section>
    );
  }
);
export default Section;
