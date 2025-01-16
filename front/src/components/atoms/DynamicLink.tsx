import styles from "./DynamicLink.module.css";

import {ReactElement} from "react";


interface IProps {
  goTo: string,
  isActive: boolean,
  children: string,
}

export default function DynamicLink({goTo, isActive, children}: IProps): ReactElement {
  function handleClick(): void {
    document.getElementById(goTo)!.scrollIntoView();
  }

  return (
    <button
      onClick={handleClick}
      className={[styles.dynamicLink, isActive ? styles.active : undefined].join(" ")}
    >{children}</button>
  );
}
