import { useEffect } from "react";

import { PortalChamberNumber } from "../types/GuessrGameType";
import { GameFunctionsParamType } from "../types/GameFunctionsHookParam";

export function useGameLogics({
  isCounterFinished,
  setIsGameFinished,
  currentQuestion,
  history,
  currentQuestionIndex,
  setHistory,
  setCurrentQuestion,
  setCurrentQuestionIndex,
  questions,
}: GameFunctionsParamType) {
  useEffect(() => {
    if (isCounterFinished) {
      setIsGameFinished(true);
      return;
    }

    setIsGameFinished(false);
  }, [isCounterFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
    const historyId = crypto.randomUUID();

    if (chamber === currentQuestion.answer) {
      writeHistory(true, historyId);
    } else {
      writeHistory(false, historyId);
    }

    showNextQuestion();
  }

  function writeHistory(isUserAnswerCorrect: boolean, historyId: string) {
    setHistory([
      ...history,
      {
        ...currentQuestion,
        userAnswer: currentQuestion.answer,
        isUserAnswerCorrect,
        historyId,
      },
    ]);
  }

  function showNextQuestion() {
    if (currentQuestionIndex === questions.length - 1) {
      setIsGameFinished(true);
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  }

  return { handleAnswer };
}
