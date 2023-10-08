import {
  GuessrHistory,
  GuessrQuestion,
  PortalChamberNumber,
} from "./GuessrGameTypes";

export interface GuessrContextType {
  questions: GuessrQuestion[];
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  history: GuessrHistory[];
  counter: number;
  isGameFinishedBeforeTimerRunOut: boolean;
  setQuestions: React.Dispatch<React.SetStateAction<GuessrQuestion[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  handleAnswer: (chamber: PortalChamberNumber) => void;
  resetCounter: (newSeconds: number) => void;
}