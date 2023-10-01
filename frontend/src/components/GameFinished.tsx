import { useContext } from "react";

import Button from "react-bootstrap/Button";

import GameStats from "./GameStats";
import { GuessrContext } from "./Game";

const GameFinished = () => {
  const { history, questions, setIsGameFinished, setIsGameRunning } =
    useContext(GuessrContext);

  const correctCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count + 1 : count),
    0
  );
  const incorrectCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count : count + 1),
    0
  );

  function handleGameRestart() {
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
