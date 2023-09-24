import {
  GuessrHistory,
  GuessrQuestions,
  PortalChamberNumber,
} from "./GuessrTypes";

export interface GuessrContextType {
  questions: GuessrQuestions[];
  currentQuestion: GuessrQuestions;
  currentQuestionIndex: number;
  history: GuessrHistory[];
  counter: number;
  setQuestions: React.Dispatch<React.SetStateAction<GuessrQuestions[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestions>>;
  setIsGameRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  handleAnswer: (chamber: PortalChamberNumber) => void;
  resetCounter: (newSeconds: number) => void;
}
