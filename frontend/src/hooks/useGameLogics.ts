// TODO: Figure out what's wrong with current implementation.
// TODO: Stats shouldn't update every time you change the page.

import { useEffect } from "react";
import { PortalChamberNumber } from "../../types/utiltypes/GuessrGameTypes";
import { GameFunctionsHookParam } from "../../types/hooktypes/GameFunctionsHookParam";

export function useGameLogics({
  isCounterFinished,
  questions,
  currentQuestion,
  currentQuestionIndex,
  history,
  hasCounterInitialized,
  setCurrentQuestion,
  setCurrentQuestionIndex,
  setHistory,
  setIsGameFinished,
  setIsGameFinishedBeforeTimerRunOut,
}: GameFunctionsHookParam) {
  useEffect(() => {
    // Fired when the counter has reached 00:00
    if (isCounterFinished && hasCounterInitialized) {
      // Only fired when the counter has started (initialized) and finished.
      // Pretty janky workaround I know.
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
    // Updating history of each game.
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
    // Setting the end screen, probably refactor-able but I'm too lazy...
    setIsGameFinishedBeforeTimerRunOut(isFinished);

    // Updating user stats in local storage.
    updateStats(isFinished);
  }

  function updateStats(isFinished: boolean) {
    const gameId = crypto.randomUUID();
    const stats = JSON.parse(localStorage.getItem("USER_STATS") || "[]");
    const updatedStats = JSON.stringify([
      ...stats,
      {
        history,
        isFinished,
        gameId,
      },
    ]);

    localStorage.setItem("USER_STATS", updatedStats);
  }

  return handleAnswer;
}
