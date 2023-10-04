import { GuessrQuestion, GuessrHistory } from "./GuessrGameType";

export interface GameFunctionsParamType {
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  isCounterFinished: boolean;
}
