import styles from "./TagPill.module.css";

import {ReactElement} from "react";

import {projectTagTypes} from "../../utils/enums.ts";

interface IProps {
  name: string,
  type: projectTagTypes
}

export default function TagPill({name, type}: IProps): ReactElement {
  return (
    <p className={[styles.wrapper, styles[type]].join(" ")}>{name}</p>
  );
}