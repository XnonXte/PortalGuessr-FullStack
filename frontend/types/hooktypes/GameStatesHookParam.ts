import { GuessrQuestion } from "../utiltypes/GuessrGameTypes";
import { GuessrHistory } from "../utiltypes/GuessrGameTypes";

export interface GameStatesHookParam {
  counter: number;
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  isGameRunning: boolean;
  isGameFinished: boolean;
  isCounterFinished: boolean;
  hasCounterInitialized: boolean;
  isGameFinishedBeforeTimerRunOut: boolean;
  resetCounter: (newSeconds: number) => void;
  setQuestions: React.Dispatch<React.SetStateAction<GuessrQuestion[]>>;
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinishedBeforeTimerRunOut: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}
