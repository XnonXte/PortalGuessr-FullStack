import { createContext } from "react";
import { useGameLogics } from "../hooks/useGameLogics";
import GameStart from "../components/game/GameStart";
import GamePlaying from "../components/game/GamePlaying";
import GameFinished from "../components/game/GameFinished";
import { GuessrContextType } from "../../types/utiltypes/GuessrContextType";
import { GameStatesHookParam } from "../../types/hooktypes/GameStatesHookParam";

export const GuessrContext = createContext({} as GuessrContextType);

const Game = (props: GameStatesHookParam) => {
  const {
    counter,
    currentQuestion,
    currentQuestionIndex,
    hasCounterInitialized,
    history,
    isCounterFinished,
    isGameFinished,
    isGameFinishedBeforeTimerRunOut,
    isGameRunning,
    questions,
    resetCounter,
    setCurrentQuestion,
    setCurrentQuestionIndex,
    setHistory,
    setIsGameFinished,
    setIsGameFinishedBeforeTimerRunOut,
    setIsGameRunning,
    setQuestions,
  } = props;

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
        isGameFinishedBeforeTimerRunOut,
        setQuestions,
        setCurrentQuestion,
        setCurrentQuestionIndex,
        setIsGameRunning,
        setIsGameFinished,
        handleAnswer,
        resetCounter,
      }}
    >
      {gameState}
    </GuessrContext.Provider>
  );
};

export default Game;
