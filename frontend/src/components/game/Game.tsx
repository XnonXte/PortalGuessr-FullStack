import { createContext } from "react";
import { useGameStates } from "../../hooks/useGameStates";
import { useGameLogics } from "../../hooks/useGameLogics";
import GameStart from "./GameStart";
import GamePlaying from "./GamePlaying";
import GameFinished from "./GameFinished";
import { GuessrContextType } from "../../../types/utiltypes/GuessrContextType";

export const GuessrContext = createContext({} as GuessrContextType);

const Guessr = () => {
  const {
    counter,
    questions,
    history,
    currentQuestion,
    currentQuestionIndex,
    isGameRunning,
    isGameFinished,
    isCounterFinished,
    hasCounterInitialized,
    isGameFinishedBeforeTimerRunOut,
    resetCounter,
    setQuestions,
    setHistory,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setIsGameRunning,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
  } = useGameStates();

  const handleAnswer = useGameLogics({
    isCounterFinished,
    questions,
    currentQuestion,
    currentQuestionIndex,
    history,
    hasCounterInitialized,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setHistory,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
  });

  let gameState;

  if (isGameRunning) {
    // When the game is running.

    if (isGameFinished) {
      // When the game is finished
      gameState = <GameFinished />;
    } else {
      // When the game is not yet finished.
      gameState = <GamePlaying />;
    }
  } else {
    // When the game is not running.
    gameState = <GameStart />;
  }

  return (
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
        isGameFinishedBeforeTimerRunOut,
      }}
    >
      {gameState}
    </GuessrContext.Provider>
  );
};

export default Guessr;
