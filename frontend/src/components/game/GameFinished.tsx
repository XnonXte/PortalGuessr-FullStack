import { useContext } from "react";
import { GuessrContext } from "./Game";
import Button from "react-bootstrap/Button";
import GameStats from "./GameStats";
import { getCorrectAndIncorrectCount } from "../../utils/getCorrectAndIncorrectCount";
import { GuessrQuestion } from "../../../types/utiltypes/GuessrGameTypes";

const GameFinished = () => {
  const {
    history,
    setIsGameFinished,
    setIsGameRunning,
    setQuestions,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    isGameFinishedBeforeTimerRunOut,
  } = useContext(GuessrContext);

  const [correctCount, incorrectCount] = getCorrectAndIncorrectCount(history);

  function handleGameRestart() {
    setQuestions([] as GuessrQuestion[]);
    setCurrentQuestion({} as GuessrQuestion);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
    setIsGameRunning(false);
  }

  return (
    <section className="my-4 mx-2 text-center">
      {isGameFinishedBeforeTimerRunOut ? (
        <h3 className="mb-3">🥳 Game finished!</h3>
      ) : (
        <div className="mb-3">
          <h3>😔 You've run out of time!</h3>
          <span>Don't worry, your result has been saved...</span>
        </div>
      )}
      <GameStats
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        completedRounds={history.length}
      />
      <Button
        variant="primary"
        className="mt-3"
        type="button"
        onClick={handleGameRestart}
      >
        Back To Menu
      </Button>
    </section>
  );
};

export default GameFinished;
