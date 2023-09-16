import { useState, useEffect } from "react";
import { useTimeout } from "../hooks/useTimeout";

import AnswerForm from "../components/AnswerForm";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Guessr from "../components/Guessr";
import MainFooter from "../components/MainFooter";

import {
  GuessrQuestions,
  PortalChamberNumber,
  GuessrHistory,
} from "../types/guessr";

import { PLACEHOLDER } from "../placeholders/placeholder"; // ! Placeholder chambers for development.

const Main = () => {
  const [questions, setQuestions] = useState([] as GuessrQuestions[]);
  const [currentQuestion, setCurrentQuestion] = useState({} as GuessrQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([] as GuessrHistory[]);

  const { url, difficulty, answer } = currentQuestion;
  const { counter, isFinished } = useTimeout(120);

  useEffect(() => {
    // Initial render.
    setQuestions(PLACEHOLDER);
    setCurrentQuestion(PLACEHOLDER[currentIndex]);
  }, []);

  useEffect(() => {
    if (isFinished) {
      // Logic after the counter reaches 0.
    }
  }, [isFinished]);

  function handleAnswer(chamber: PortalChamberNumber) {
    // Handling user answer.
    if (chamber === answer) {
      setHistory([
        ...history,
        {
          ...currentQuestion,
          userAnswer: answer,
          isUserAnswerCorrect: true,
        },
      ]);
    } else {
      setHistory([
        ...history,
        {
          ...currentQuestion,
          userAnswer: chamber,
          isUserAnswerCorrect: false,
        },
      ]);
    }

    showNextQuestion();
  }

  function showNextQuestion() {
    // Showing next question.
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  }

  return (
    <>
      <Guessr
        image={url}
        difficulty={difficulty}
        max={questions.length}
        current={currentIndex + 1}
        timeoutCounter={counter}
      />
      <AnswerForm onAnswer={handleAnswer} />
      <MainFooter />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default Main;
