import { useEffect } from "react";
import { PortalChamberNumber } from "../../types/utiltypes/GuessrGameTypes";
import { GuessrLogicsParamType } from "../../types/hooktypes/GameFunctionsHookParam";

export function useGameLogics({
  isCounterFinished,
  questions,
  currentQuestion,
  currentQuestionIndex,
  history,
  isCounterStarted,
  setCurrentQuestion,
  setCurrentQuestionIndex,
  setHistory,
  setIsGameFinished,
  setIsGameFinishedBeforeTimerRunOut,
}: GuessrLogicsParamType) {
  useEffect(() => {
    // Fired when the counter has reached 00:00
    if (isCounterFinished === true && isCounterStarted === false) {
      // Only fired when the counter has started and finished.
      // This is to prevent this condition to be fired when the user
      // is in the main menu where we set the initial seconds to 0.
      saveGameResult(false);
      setIsGameFinished(true);
      return;
    }

    // Clean up procedure.
    setIsGameFinished(false);
  }, [isCounterFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
    // Handling user answer (when the user submit the answer form).
    const historyId = crypto.randomUUID();

    if (chamber === currentQuestion.answer) {
      writeHistory(true, historyId);
    } else {
      writeHistory(false, historyId);
    }

    showNextQuestion();
  }

  function writeHistory(isUserAnswerCorrect: boolean, historyId: string) {
    const { answer: userAnswer } = currentQuestion;

    setHistory([
      ...history,
      {
        ...currentQuestion,
        userAnswer,
        isUserAnswerCorrect,
        historyId,
      },
    ]);
  }

  function showNextQuestion() {
    // Showing next question.
    if (currentQuestionIndex === questions.length - 1) {
      // If we've run out of questions.
      saveGameResult(true);
      setIsGameFinished(true);
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  }

  function saveGameResult(isFinished: boolean) {
    setIsGameFinishedBeforeTimerRunOut(isFinished);
    updateStats(isFinished);
  }

  function updateStats(isFinished: boolean) {
    const gameId = crypto.randomUUID();
    const stats = JSON.parse(localStorage.getItem("USER_STATS") || "[]");
    const updatedStats = JSON.stringify([
      ...stats,
      {
        gameId,
        isFinished,
        history,
      },
    ]);

    localStorage.setItem("USER_STATS", updatedStats);
  }

  return handleAnswer;
}
