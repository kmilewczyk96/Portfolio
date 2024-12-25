import styles from "./GlitchImage.module.css";

import {ReactElement} from "react";


type IProps = {
  imageSource: string,
  imageAltText: string,
  className?: string,
  animationDelaySeconds?: number,
};

export default function GlitchImage(
  {
    imageSource,
    imageAltText,
    className,
    animationDelaySeconds=0
  }: IProps): ReactElement {
  return (
    <div style={{animationDelay: `${animationDelaySeconds}s`}} className={[styles.wrapper, className].join(" ")}>
      <img src={imageSource} alt={imageAltText}/>
      <img aria-hidden={true} src={imageSource} alt={imageAltText}/>
      <img aria-hidden={true} src={imageSource} alt={imageAltText}/>
    </div>
  );
}
