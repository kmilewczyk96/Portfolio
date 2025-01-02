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
  const marqueeRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0);

  let wrapperClasses: string[] = [styles.wrapper, className];
  animationSpeed !== 0 && wrapperClasses.push(styles.wrapperAnimated);

  useLayoutEffect(() => {
    function handleResize(): void {
      if (typeof marqueeRef !== null) {
        // @ts-ignore
        setWrapperWidth(marqueeRef.current.parentElement.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (typeof marqueeRef !== null) {
        // @ts-ignore
        const marqueeWidth: number = marqueeRef.current.offsetWidth;
        // @ts-ignore
        const wrapperWidth: number = marqueeRef.current.parentElement.offsetWidth;

        if (marqueeWidth > wrapperWidth) {
          setAnimationSpeed(marqueeWidth / 100);
        } else {
          setAnimationSpeed(0);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [wrapperWidth])

  return (
    <div
      key={animationSpeed}
      className={wrapperClasses.join(" ")}
    >
      <ul
        ref={marqueeRef}
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
