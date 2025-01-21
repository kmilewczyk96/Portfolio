import styles from "./BaseWrapper.module.css";

import {ReactElement} from "react";


type alignment = "start" | "center" | "end"

interface IProps {
  contentAlignment: alignment,
  className?: string,
  children: ReactElement,
}

// TODO: Remove this useless class. Instead add styling to index css in utils classes.
export default function BaseWrapper({contentAlignment, className, children}: IProps): ReactElement {
  return (
    <div className={[styles.wrapper, styles[contentAlignment], className].join(" ")}>
      {children}
    </div>
  );
}