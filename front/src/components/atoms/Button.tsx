import styles from "./Button.module.css";

import {
  ComponentPropsWithoutRef,
  ReactElement
} from "react";


interface IProps extends ComponentPropsWithoutRef<"button">{
  className?: "string",
  children: ReactElement | string,
}

export default function Button({className, children, ...props}: IProps): ReactElement {
  return (
    <button
      className={[styles.buttonDefault, className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
