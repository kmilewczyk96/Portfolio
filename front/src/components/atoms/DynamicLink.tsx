import styles from "./DynamicLink.module.css";

import {ReactElement} from "react";


interface IProps {
  goTo: string,
  className?: string | undefined,
  children: string,
}

export default function DynamicLink({goTo, className, children}: IProps): ReactElement {
  function handleClick(): void {
    document.getElementById(goTo)!.scrollIntoView();
  }

  return <button onClick={handleClick} className={[styles.dynamicLink, className].join(" ")}>{children}</button>;
}
