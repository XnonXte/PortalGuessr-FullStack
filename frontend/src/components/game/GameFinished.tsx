import { useContext } from "react";

import { GuessrContext } from "./Game";

import Button from "react-bootstrap/Button";

import GameStats from "./GameStats";

import { getCorrectIncorrectCount } from "../../utils/getCorrectIncorrectCount";

import { GuessrQuestion } from "../../types/GuessrGameType";

const GameFinished = () => {
  const {
    history,
    questions,
    setIsGameFinished,
    setIsGameRunning,
    setQuestions,
    setCurrentQuestion,
    setCurrentQuestionIndex,
  } = useContext(GuessrContext);

  const [correctCount, incorrectCount] = getCorrectIncorrectCount(history);

  function handleGameRestart() {
    setQuestions([] as GuessrQuestion[]);
    setCurrentQuestion({} as GuessrQuestion);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
    setIsGameRunning(false);
  }

  return (
    <section className="my-4 mx-2 text-center">
      <h3>Game Finished!</h3>
      <GameStats
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        totalRounds={questions.length}
      />
      <Button
        variant="primary"
        className="mt-2"
        type="button"
        onClick={handleGameRestart}
      >
        Restart Game
      </Button>
    </section>
  );
};

export default GameFinished;
