import styles from "./ContactCard.module.css";

import {ReactElement} from "react";

import SvgLink, {socialIcons} from "../atoms/SvgLink.tsx";


interface IProps {
  className?: string | undefined,
}

export default function ContactCard({className}: IProps): ReactElement {
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <div className={styles.socials}>
        <SvgLink goTo={"https://www.linkedin.com/in/karol-milewczyk/"} icon={socialIcons.linkedin}/>
        <SvgLink goTo={"https://github.com/kmilewczyk96/"} icon={socialIcons.github}/>
      </div>
      <div className={styles.content}>
        <p>
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
        </p>
      </div>
      <div className={styles.statusWrapper}>
        <p>Location: Warsaw, PL</p>
        <p>Status: Available instantly.</p>
      </div>
    </div>
  );
}