import styles from "./MainNavbar.module.css";

import {ReactNode} from "react";
import DynamicLink from "../atoms/DynamicLink.tsx";


export default function MainNavbar(): ReactNode {
  return (
    <nav className={styles.mainNavbar}>
      <li className={styles.linkWrapper}>
        <DynamicLink goTo={"home"}>Home</DynamicLink>
        <DynamicLink goTo={"projects"}>Projects</DynamicLink>
        <DynamicLink goTo={"contact"}>Contact</DynamicLink>
      </li>
    </nav>
  );
};
