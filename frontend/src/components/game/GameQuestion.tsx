import { useContext } from "react";
import { GuessrContext } from "./Game";
import { useBSBreakpointsResizer } from "../../hooks/useBSBreakpointsResizer";
import BlurhashImage from "../image/BlurhashImage";
import { formatTimeoutCounter } from "../../utils/formatTimeoutCounter";
import { convertToDifficultyColor } from "../../utils/convertToDifficultyColor";

// TODO: Create a responsive image based on Bootstrap breakpoints.

const GameQuestion = () => {
  const { currentQuestion, counter, currentQuestionIndex, questions } =
    useContext(GuessrContext);

  const [responsiveWidth, responsiveHeight] = useBSBreakpointsResizer({
    xs: [15, 15],
    sm: [20, 20],
    md: [30, 30],
    lg: [40, 40],
    xl: [50, 50],
    xxl: [60, 60],
    initialWidth: 1920,
    initialHeight: 1080,
  });

  const currentRound = currentQuestionIndex + 1;
  const totalRounds = questions.length;
  const { difficulty, url, bhHash } = currentQuestion;

  const difficultyColor = convertToDifficultyColor(difficulty);

  return (
    <section className="my-4 mx-2 d-flex flex-column justify-content-center align-items-center">
      <h5 className="mb-4 px-1">
        <span
          className={`text-pg-${
            counter <= 10 ? (counter % 2 === 0 ? "danger" : "light") : "light"
          }`}
        >
          <i className="bi bi-stopwatch-fill"></i>{" "}
          {formatTimeoutCounter(counter)}
        </span>
      </h5>
      <BlurhashImage
        bhAlt="PortalGuessr chamber image"
        bhHash={bhHash}
        bhSrc={url}
        bhWidth={responsiveWidth}
        bhHeight={responsiveHeight}
      />
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
