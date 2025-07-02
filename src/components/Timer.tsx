/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  return <p>{time.toLocaleTimeString()}</p>;
}
