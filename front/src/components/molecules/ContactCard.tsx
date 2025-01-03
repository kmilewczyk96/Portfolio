import styles from "./ContactCard.module.css";

import {ReactElement} from "react";


interface IProps {
  className?: string | undefined,
}

export default function ContactCard({className}: IProps): ReactElement {
  // TODO: finish contact card. Add SVGs for linkedIn and Github. Add current localisation and availability div.
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <div className={styles.socials}></div>
      <div className={styles.content}>
        <p>
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
          Something about myself I should write in here. This is just boilerplate for now. Choosing font etc.
        </p>
      </div>
    </div>
  );
}