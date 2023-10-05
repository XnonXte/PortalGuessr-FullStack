import { useState, useEffect } from "react";

export function useTimeoutTimer(initialSeconds: number) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isCounterFinished, setIsCounterFinished] = useState(false);
  const [isCounterStarted, setIsCounterStarted] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (counter > 0) {
      // Set the flag when the counter starts
      setIsCounterStarted(true);

      timer = setInterval(() => {
        setCounter((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
    } else {
      // Reset the flag when the counter finishes
      setIsCounterFinished(true);
      setIsCounterStarted(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const resetCounter = (newSeconds: number) => {
    // Reset the flag when the counter is reset
    setCounter(newSeconds);
    setIsCounterFinished(false);
    setIsCounterStarted(false);
  };

  return { counter, isCounterFinished, isCounterStarted, resetCounter };
}
