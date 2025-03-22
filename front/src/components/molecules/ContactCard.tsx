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
          Currently I am searching for position as Backend/Full-stack developer, I can also help you create website
          like this one as a freelancer.<br/>
          If you have any questions, please fill out attached form, and I will get back to you within 48 hours.
          Feel free to add me to your LinkedIn network or explore my GitHub repositories using the links above.
        </p>
      </div>
      <div className={styles.statusWrapper}>
        <p>Location: Warsaw, PL</p>
        <p>Status: Available instantly.</p>
        <p>Relocation: Ready to relocate within EU + UK.</p>
      </div>
    </div>
  );
}