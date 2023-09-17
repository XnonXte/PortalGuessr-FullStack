import {
  GuessrHistory,
  GuessrQuestions,
  PortalChamberNumber,
} from "./GuessrType";

export interface GuessrContextType {
  questions: GuessrQuestions[];
  currentQuestion: GuessrQuestions;
  currentQuestionIndex: number;
  history: GuessrHistory[];
  counter: number;
  handleAnswer: (chamber: PortalChamberNumber) => void;
}
