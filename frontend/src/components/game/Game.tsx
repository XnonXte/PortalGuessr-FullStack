import { createContext } from "react";

import { useGameStates } from "../../hooks/useGameStates";
import { useGameLogics } from "../../hooks/useGameLogics";

import GameStart from "./GameStart";
import GamePlaying from "./GamePlaying";
import GameFinished from "./GameFinished";

import { GuessrContextType } from "../../types/GuessrContextType";

export const GuessrContext = createContext({} as GuessrContextType);

const Guessr = () => {
  const {
    questions,
    setQuestions,
    history,
    setHistory,
    currentQuestion,
    currentQuestionIndex,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    isGameRunning,
    setIsGameRunning,
    isGameFinished,
    setIsGameFinished,
    counter,
    isCounterFinished,
    resetCounter,
  } = useGameStates();

  const { handleAnswer } = useGameLogics({
    currentQuestion,
    currentQuestionIndex,
    history,
    isCounterFinished,
    questions,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setHistory,
    setIsGameFinished,
  });

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
          setCurrentQuestionIndex,
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
