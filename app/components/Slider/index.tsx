"use client";
import { useEffect, useState } from "react";
import "./style.scss";
export interface SliderProps {
  autoPlay?: boolean;
  timeDelay?: number;
  content: React.ReactNode[];
}
export default function Slider(props: SliderProps) {
  const { autoPlay = true, timeDelay = 5000, content } = props;
  const [active, setActive] = useState(0);
  const [isPause, setItPause] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoPlay) {
      interval = setInterval(() => {
        if (!isPause) setActive((prev) => (prev + 1) % content.length);
      }, timeDelay);
    }
    return () => interval && clearInterval(interval);
  }, [isPause, content, timeDelay, autoPlay]);
  const onClickDot = (index: number) => {
    setItPause(true);
    setActive(() => index);
    setTimeout(() => setItPause(false), timeDelay);
  };
  return (
    <div className="slideshow relative m-auto h-full flex">
      {content.map((el, index) => (
        <div
          className={`fade w-full h-full ${
            active === index ? "slideIn" : "slideOut"
          }`}
          key={"slider_" + index}>
          {el}
        </div>
      ))}
      <div className="container w-full h-full relative">
        <div className="dotGroup px-5">
          {content.map((_, index) => (
            <div
              className={`dot ${index === active ? "active" : ""}`}
              key={"dot_" + index}
              onClick={() => onClickDot(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
