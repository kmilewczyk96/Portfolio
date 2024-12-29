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

  let content: ReactElement =
    <>
      {elementsToDisplay.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </>


  useLayoutEffect(() => {
    console.log("triggered!")
    // @ts-ignore
    const marqueeWidth: number = marqueeWrapper.current.offsetWidth;
    // @ts-ignore
    if (marqueeWidth > marqueeWrapper.current.parentElement.offsetWidth) {
      setAnimationSpeed(marqueeWidth / 250);
    }
  }, [])

  return (
    <ul
      ref={marqueeWrapper}
      style={{animationDuration: `${animationSpeed}s`}}
      className={[styles.wrapper, className].join(" ")}
    >
      {animationSpeed === 0 ? content : [content, content]}
    </ul>
  );
}
