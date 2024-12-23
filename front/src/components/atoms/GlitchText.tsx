import styles from "./GlitchText.module.css";

import {ReactElement} from "react";

import {htmlTextTags} from "../../utils/enums.ts";

type IProps = {
  text: string,
  className: string | undefined,
  htmlTextTag: htmlTextTags,
};

export default function GlitchText({text, className, htmlTextTag}: IProps) {
  let content: ReactElement;
  switch (htmlTextTag) {
    case htmlTextTags.h1:
      content = <h1>{text}</h1>
      break;
    case htmlTextTags.h2:
      content = <h2>{text}</h2>
      break;
    case htmlTextTags.h3:
      content = <h3>{text}</h3>
      break;
    case htmlTextTags.h4:
      content = <h4>{text}</h4>
      break;
    case htmlTextTags.h5:
      content = <h5>{text}</h5>
      break;
    case htmlTextTags.h6:
      content = <h6>{text}</h6>
      break;
    case htmlTextTags.p:
      content = <p>{text}</p>
      break;
    case htmlTextTags.span:
      content = <span className={styles.nonAbsolute}>{text}</span>
      break;
  }

  return (
    <div className={[styles.wrapper, className].join(" ")}>
      {content}
      <span aria-hidden={true}>{text}</span>
      <span aria-hidden={true}>{text}</span>
    </div>
  );
}
