import styles from "./Button.module.css";

import {ReactElement} from "react";

type buttonType = "submit" | "button" | "reset";

interface IProps {
  className?: "string",
  onClick?: () => any,
  type?: buttonType,
  children: ReactElement | string,
}

export default function Button({className, onClick, type = "button", children}: IProps): ReactElement {
  return (
    <button
      className={[styles.buttonDefault, className].join(" ")}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
