import styles from "./Spinner.module.css";

import {ReactElement} from "react";


export default function Spinner(): ReactElement {
  return (
    <div className={styles.spinner}/>
  );
}
