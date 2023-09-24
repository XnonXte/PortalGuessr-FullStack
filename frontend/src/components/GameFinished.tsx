import { useContext } from "react";

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
    <section className="my-4 mx-2 d-flex flex-column align-items-center text-center">
      <h3>Game Finished!</h3>
      <div className="d-flex justify-content-center gap-2">
        <GameStats
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          totalRounds={questions.length}
        />
      </div>
      <button
        className="mt-2 btn btn-pg-primary"
        type="button"
        onClick={handleGameRestart}
      >
        Restart Game
      </button>
    </section>
  );
};

export default GameFinished;
