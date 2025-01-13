import styles from "./DynamicLink.module.css";

import {ReactElement} from "react";


interface IProps {
  goTo: string,
  children: string,
}

export default function DynamicLink({goTo, children}: IProps): ReactElement {
  function handleClick(): void {
    document.getElementById(goTo)!.scrollIntoView();
  }

  return (
    <button onClick={handleClick} className={styles.dynamicLink}>{children}</button>
  );
}