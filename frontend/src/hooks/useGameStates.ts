import { useState } from "react";

import { useTimeoutTimer } from "./useTimeoutTimer";

import {
  GuessrQuestion,
  GuessrHistory,
} from "../../types/utiltypes/GuessrGameTypes";

export function useGameStates() {
  const [questions, setQuestions] = useState([] as GuessrQuestion[]);
  const [history, setHistory] = useState([] as GuessrHistory[]);

  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestion);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameFinishedBeforeTimerRunOut, setIsGameFinishedBeforeTimerRunOut] =
    useState(false);

  const { counter, isCounterFinished, isCounterStarted, resetCounter } =
    useTimeoutTimer(0);

  return {
    counter,
    questions,
    history,
    currentQuestion,
    currentQuestionIndex,
    isGameRunning,
    isGameFinished,
    isCounterFinished,
    isCounterStarted,
    isGameFinishedBeforeTimerRunOut,
    resetCounter,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIsGameRunning,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
  };
}
