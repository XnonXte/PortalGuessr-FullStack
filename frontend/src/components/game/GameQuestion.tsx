import { useContext } from "react";

import { GuessrContext } from "./Game";

import { formatTimeoutCounter } from "../../utils/formatTimeoutCounter";
import { convertToDifficultyColor } from "../../utils/convertToDifficultyColor";

import "../../styles/css/Image.css";

const GameQuestion = () => {
  const { currentQuestion, counter, currentQuestionIndex, questions } =
    useContext(GuessrContext);

  const currentRound = currentQuestionIndex + 1;
  const totalRounds = questions.length;
  const { difficulty, url } = currentQuestion;

  const difficultyColor = convertToDifficultyColor(difficulty);

  return (
    <section className="my-4 mx-2 d-flex flex-column justify-content-center align-items-center">
      <h5 className="mb-4 px-1">
        <i className="bi bi-stopwatch-fill"></i>{" "}
        <span className={`text-pg-${counter > 10 ? "light" : "danger"}`}>
          {formatTimeoutCounter(counter)}
        </span>
      </h5>
      <div className="pg-image-figure">
        <img src={url} alt="PortalGuessr chamber image" className="img-fluid" />
      </div>
      <div className="mt-4 d-flex align-items-center gap-2">
        <span className="fw-bold py-2 px-1 border rounded bg-pg-dark">
          {currentRound} / {totalRounds}
        </span>
        <span
          className={`py-2 px-1 border rounded bg-pg-${difficultyColor} text-${
            difficulty === "Medium" ? "dark" : "light"
          }`}
        >
          {difficulty}
        </span>
      </div>
    </section>
  );
};

export default GameQuestion;
