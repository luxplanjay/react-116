/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(`Interval tick - ${Date.now()}`);
    }, 1000);

    console.log("useEffect", intervalId);

    return () => {
      console.log("clearInterval", intervalId);
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
