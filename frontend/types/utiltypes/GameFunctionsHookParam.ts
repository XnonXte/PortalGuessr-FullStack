import { GuessrQuestion, GuessrHistory } from "./GuessrGameTypes";

export interface GuessrLogicsParamType {
  questions: GuessrQuestion[];
  history: GuessrHistory[];
  setHistory: React.Dispatch<React.SetStateAction<GuessrHistory[]>>;
  currentQuestion: GuessrQuestion;
  currentQuestionIndex: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<GuessrQuestion>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  isCounterFinished: boolean;
  isCounterStarted: boolean;
  setIsGameFinishedBeforeTimerRunOut: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}
