import styles from "./BaseWrapper.module.css";

import {ReactElement} from "react";


type alignment = "start" | "center" | "end"

interface IProps {
  contentAlignment: alignment,
  className?: string,
  children: ReactElement,
}

export default function BaseWrapper({contentAlignment, className, children}: IProps): ReactElement {
  return (
    <div className={[styles.wrapper, styles[contentAlignment], className].join(" ")}>
      {children}
    </div>
  );
}