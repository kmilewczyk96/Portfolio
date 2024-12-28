import styles from "./Marquee.module.css";

import {
  ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from "react";


interface IProps {
  className: string,
  elementsToDisplay: ReactElement[]
}

export default function Marquee({className, elementsToDisplay}: IProps): ReactElement {
  const marqueeWrapper = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState(0);

  useLayoutEffect(() => {
    // @ts-ignore
    const marqueeWidth: number = marqueeWrapper.current.offsetWidth;
    // @ts-ignore
    if (marqueeWidth > marqueeWrapper.current.parentElement.offsetWidth) {
      setAnimationSpeed(marqueeWidth / 5);
    }
  }, [])

  return (
    <ul ref={marqueeWrapper} className={[styles.wrapper, className].join(" ")}>
      {
        animationSpeed === 0 ? (elementsToDisplay.map(
          (el, index) => <li key={index}>{el}</li>
        )): (elementsToDisplay.map(
          (el, index) => <li key={index}>{el}</li>
        ))
      }
    </ul>
  );
}
