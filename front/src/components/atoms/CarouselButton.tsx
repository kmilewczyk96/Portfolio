import styles from "./CarouselButton.module.css";

import {
  ComponentPropsWithoutRef,
  ReactElement,
  useState,
} from "react";


export enum direction {
  left="left",
  right="right",
}

interface IProps extends ComponentPropsWithoutRef<"button">{
  buttonFn: () => void,
  direction: direction,
  maxClicksPerSecond?: number,
}

export default function CarouselButton({buttonFn, direction, maxClicksPerSecond=3, ...props}: IProps): ReactElement {
  const [isLocked, setIsLocked] = useState(false);

  function handleClick(): void {
    if (isLocked) {
      return;
    }
    buttonFn();

    if (maxClicksPerSecond !== 0) {
      setIsLocked(true);
      setTimeout((): void => {
        setIsLocked(false);
      }, 1000 / maxClicksPerSecond);
    }
  }

  const path: ReactElement = direction === "left" ? <path
            d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
  /> : <path
    d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
  />

  return (
    <button
      className={[styles.carouselBtn, styles[direction]].join(" ")}
      {...props}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="#242424" viewBox="0 0 256 256">
        {path}
      </svg>
    </button>
  );
}
