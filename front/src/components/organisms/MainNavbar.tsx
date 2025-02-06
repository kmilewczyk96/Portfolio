import styles from "./MainNavbar.module.css";

import {ReactElement} from "react";

import DynamicLink from "../atoms/DynamicLink.tsx";
import {ISection} from "../../utils/interfaces.ts";


interface IProps {
  sections: ISection[],
  activeSectionID: string,
}

export default function MainNavbar({sections, activeSectionID}: IProps): ReactElement {
  return (
    <div className={
      [styles.mainNavbar, activeSectionID === "home" ? styles.hidden : undefined].join(" ")
    }>
      <li className={styles.linkWrapper}>
        {sections.map(section =>
          <DynamicLink
            key={section.id}
            goTo={section.id}
            isActive={activeSectionID === section.id}
          >{section.label}</DynamicLink>
        )}
      </li>
    </div>
  );
};
