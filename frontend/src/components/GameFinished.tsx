import { useContext } from "react";

import { GuessrContext } from "./Game";

const GameFinished = () => {
  const { history, questions } = useContext(GuessrContext);

  const correctCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count + 1 : count),
    0
  );
  const incorrectCount = history.reduce(
    (count, game) => (game.isUserAnswerCorrect ? count : count + 1),
    0
  );

  return (
    <section className="my-4 mx-2 d-flex flex-column align-items-center text-center">
      <h4 className="mb-3">Game Finished!</h4>
      <div className="d-flex justify-content-center gap-2">
        <div className="d-flex flex-column align-items-center">
          <div className="fs-4">{correctCount}</div>
          <span>Correct Answers</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="fs-4">{incorrectCount}</div>
          <span>Incorrect Answers</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="fs-4">{questions.length}</div>
          <span>Total Rounds</span>
        </div>
      </div>
    </section>
  );
};

export default GameFinished;
