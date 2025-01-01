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

  let wrapperClasses: string[] = [styles.wrapper, className];
  animationSpeed !== 0 && wrapperClasses.push(styles.wrapperAnimated);

  useLayoutEffect(() => {
    // @ts-ignore
    const marqueeWidth: number = marqueeWrapper?.current.offsetWidth;
    // @ts-ignore
    if (marqueeWidth > marqueeWrapper.current.parentElement.offsetWidth) {
      setAnimationSpeed(marqueeWidth / 150);
    }
  }, [])

  return (
    <div
      key={animationSpeed}
      className={wrapperClasses.join(" ")}
    >
      <ul
        ref={marqueeWrapper}
        className={styles.marquee}
        style={{animationDuration: `${animationSpeed}s`}}
      >
        {elementsToDisplay.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      {animationSpeed !== 0 && (
        <ul
          className={styles.marquee}
          style={{animationDuration: `${animationSpeed}s`}}
        >
          {elementsToDisplay.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
