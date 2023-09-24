import { useState, useEffect, createContext } from "react";

import useTimeoutTimer from "../hooks/useTimeoutTimer";

import GameStart from "./GameStart";
import GamePlaying from "./GamePlaying";
import GameFinished from "./GameFinished";

import { GuessrQuestions, GuessrHistory } from "../types/GuessrTypes";
import { GuessrContextType } from "../types/GuessrContextType";
import { PortalChamberNumber } from "../types/GuessrTypes";

export const GuessrContext = createContext({} as GuessrContextType);

const Guessr = () => {
  const [questions, setQuestions] = useState([] as GuessrQuestions[]);
  const [history, setHistory] = useState([] as GuessrHistory[]);
  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const { counter, isCounterFinished, resetCounter } = useTimeoutTimer(0);

  useEffect(() => {
    if (isCounterFinished) {
      // When the timer runs out, switch the isGameFinished flag to true.
      setIsGameFinished(true);
      return;
    }
    // When the timer hasn't run out, do NOT switch the isGameFinished flag to true.
    // This will be handy as we will reset the timer later
    // without calling setIsGameFinished() explicitly.
    setIsGameFinished(false);
  }, [isCounterFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
    // Handling user answer.
    // We copy the question's data to history for later use.
    const randomId = crypto.randomUUID();

    if (chamber === currentQuestion.answer) {
      setHistory([
        ...history,
        {
          ...currentQuestion,
          userAnswer: currentQuestion.answer,
          isUserAnswerCorrect: true,
          historyId: randomId,
        },
      ]);
    } else {
      setHistory([
        ...history,
        {
          ...currentQuestion,
          userAnswer: currentQuestion.answer,
          isUserAnswerCorrect: false,
          historyId: randomId,
        },
      ]);
    }

    showNextQuestion();
  }

  function showNextQuestion() {
    // Showing next question.
    if (currentQuestionIndex === questions.length - 1) {
      setIsGameFinished(true);
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  }

  let gameDisplay;

  if (isGameRunning) {
    // When the game is running.
    if (isGameFinished) {
      // When the game is finished
      gameDisplay = <GameFinished />;
    } else {
      // When the game is not yet finished.
      gameDisplay = <GamePlaying />;
    }
  } else {
    // When the game is not running.
    gameDisplay = <GameStart />;
  }

  return (
    <>
      <GuessrContext.Provider
        value={{
          questions,
          currentQuestion,
          currentQuestionIndex,
          history,
          counter,
          setQuestions,
          setCurrentQuestion,
          setIsGameRunning,
          setIsGameFinished,
          handleAnswer,
          resetCounter,
        }}
      >
        {gameDisplay}
      </GuessrContext.Provider>
    </>
  );
};

export default Guessr;
