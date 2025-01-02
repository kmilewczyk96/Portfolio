import styles from "./MainNavbar.module.css";

import {ReactNode} from "react";
import {NavLink} from "react-router";


export default function MainNavbar(): ReactNode {
  return (
    <nav className={styles.mainNavbar}>
      <li className={styles.linkWrapper}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Projects"}>Projects</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
      </li>
    </nav>
  );
};
