import styles from "./GlitchButton.module.css";

import {
  ComponentPropsWithoutRef,
  ReactElement
} from "react";


interface IProps extends ComponentPropsWithoutRef<"button"> {
  text: string,
  className?: string,
}

export default function GlitchButton({text, className, ...props}: IProps): ReactElement {
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <button {...props}>{text}</button>
      <button className={styles.fake} aria-hidden={true} disabled={true}>{text}</button>
      <button className={styles.fake} aria-hidden={true} disabled={true}>{text}</button>
    </div>
  );
}
