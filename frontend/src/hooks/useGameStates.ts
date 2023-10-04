import { useState } from "react";

import useTimeoutTimer from "./useTimeoutTimer";

import { GuessrQuestion, GuessrHistory } from "../types/GuessrGameType";

export function useGameStates() {
  const [questions, setQuestions] = useState([] as GuessrQuestion[]);
  const [history, setHistory] = useState([] as GuessrHistory[]);

  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestion);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const { counter, isCounterFinished, resetCounter } = useTimeoutTimer(0);

  return {
    questions,
    setQuestions,
    history,
    setHistory,
    currentQuestion,
    currentQuestionIndex,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    isGameRunning,
    setIsGameRunning,
    isGameFinished,
    setIsGameFinished,
    counter,
    isCounterFinished,
    resetCounter,
  };
}
