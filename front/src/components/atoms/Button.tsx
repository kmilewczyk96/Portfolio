import styles from "./Button.module.css";

import {
  ComponentPropsWithoutRef,
  ReactElement
} from "react";


interface IProps extends ComponentPropsWithoutRef<"button"> {
  type_: "cta" | "secondary";
  goTo?: string,
  className?: string,
  children: ReactElement | string,
}

export default function Button({type_, goTo, className, children, ...props}: IProps): ReactElement {
  const button: ReactElement = (
    <button
      className={[styles[type_], className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );

  if (goTo && !props.disabled) {
    return (
      <a href={goTo} rel={"noopener noreferrer"} target={"_blank"}>
        {button}
      </a>
    );
  }

  return button;
}
