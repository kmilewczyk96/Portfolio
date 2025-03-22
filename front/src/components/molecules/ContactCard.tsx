import styles from "./ContactCard.module.css";

import {ReactElement} from "react";

import SvgLink, {socialIcons} from "../atoms/SvgLink.tsx";
import headerPhoto from "../../assets/headerPhoto.webp";


interface IProps {
  className?: string | undefined,
}

export default function ContactCard({className}: IProps): ReactElement {
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <div className={styles.contactHeader}>
        <div className={styles.headerPhotoWrapper}>
          <img className={styles.headerPhoto} src={headerPhoto} alt={"Header photo of myself."}/>
        </div>
        <line/>
        <div className={styles.socials}>
          <SvgLink goTo={"https://www.linkedin.com/in/karol-milewczyk/"} icon={socialIcons.linkedin} label={"LinkedIn"}/>
          <SvgLink goTo={"https://github.com/kmilewczyk96/"} icon={socialIcons.github} label={"Github"}/>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Currently I am looking for position of Backend/Full-stack developer, I can also help you create websites
          (like this one) as a freelancer.<br/>
          If you have any questions, please fill out attached form, and I will get back to you within 48 hours.
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