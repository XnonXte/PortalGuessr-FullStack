//TODO: Use 'useReducer' hook to store component states instead of the useState hook.

import { useState, useEffect, createContext } from "react";

import { useTimeout } from "../hooks/useTimeout";
import GameFinished from "./GameFinished";
import GamePlaying from "./GamePlaying";
import { GuessrQuestions, GuessrHistory } from "../types/GuessrType";
import { GuessrContextType } from "../types/GuessrContextType";
import { PortalChamberNumber } from "../types/GuessrType";

// ! Placeholder images ONLY for development build.
import { PLACEHOLDER } from "../../placeholders/placeholder";

export const GuessrContext = createContext({} as GuessrContextType);

const Guessr = () => {
  const [questions, setQuestions] = useState([] as GuessrQuestions[]);
  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [history, setHistory] = useState([] as GuessrHistory[]);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const TIMEOUT_SECONDS = 300;
  const { counter, isFinished } = useTimeout(TIMEOUT_SECONDS);

  useEffect(() => {
    setQuestions(PLACEHOLDER);
    setCurrentQuestion(PLACEHOLDER[currentQuestionIndex]);
  }, []);

  useEffect(() => {
    // When the timer runs out.
    if (isFinished) {
      setIsGameFinished(true);
    }
  }, [isFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
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
      // If we have run out of questions.
      setIsGameFinished(true);
      return;
    }
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
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
          handleAnswer,
        }}
      >
        {isGameFinished ? <GameFinished /> : <GamePlaying />}
      </GuessrContext.Provider>
    </>
  );
};

export default Guessr;
