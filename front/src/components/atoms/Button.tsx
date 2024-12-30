import styles from "./Button.module.css";

import {ReactElement} from "react";


interface IProps {
  className?: "string",
  onClick: () => any,
  children: ReactElement | string,
}

export default function Button({className, onClick, children}: IProps): ReactElement {
  return (
    <button
      className={[styles.buttonDefault, className].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
