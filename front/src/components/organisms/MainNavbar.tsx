import styles from "./MainNavbar.module.css";

import {ReactElement, useEffect} from "react";

import DynamicLink from "../atoms/DynamicLink.tsx";
import {ISection} from "../../utils/interfaces.ts";


interface IProps {
  sections: ISection[],
}

export default function MainNavbar({sections}: IProps): ReactElement {
  useEffect(() => {
    function onScroll(): void {
      console.log('scrolling');
    }
    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.mainNavbar}>
      <li className={styles.linkWrapper}>
        {sections.map(section =>
          <DynamicLink key={section.id} goTo={section.id}>{section.label}</DynamicLink>
        )}
      </li>
    </nav>
  );
};
