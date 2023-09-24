import { useState, useEffect } from "react";

function useTimeoutTimer(initialSeconds: number) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prevSeconds: number) => prevSeconds - 1);
      }, 1000);
    } else {
      setIsCounterFinished(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const resetCounter = (newSeconds: number) => {
    setCounter(newSeconds);
    setIsCounterFinished(false);
  };

  return { counter, isCounterFinished, resetCounter };
}

export default useTimeoutTimer;
