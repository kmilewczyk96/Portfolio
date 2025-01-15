import styles from "./Section.module.css";

import {
  ReactElement,
  ForwardedRef,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from "react";


interface IProps {
  sectionID: string,
  className?: string | undefined,
  children: ReactElement,
}

const Section: ForwardRefExoticComponent<IProps & RefAttributes<HTMLElement>> = forwardRef(
  function Section({sectionID, className = undefined, children}: IProps, ref: ForwardedRef<HTMLElement>): ReactElement {
    return (
      <section id={sectionID} className={className ? className : styles.wrapper} ref={ref}>
        {children}
      </section>
    );
  }
);
export default Section;
