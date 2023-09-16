import { useState, useEffect } from "react";

export const useTimeout = (timeout: number) => {
  const [isFinished, setIsFinished] = useState(false);
  const [counter, setCounter] = useState(timeout);

  useEffect(() => {
    const timer =
      counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : undefined;
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      setIsFinished(true);
    }
  }, [counter]);

  return { counter, isFinished };
};
