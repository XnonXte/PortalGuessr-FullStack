import { GuessrDifficulty } from "./GuessrTypes";

export interface StartingCardsProps {
  handleGameStart: (
    difficulty: GuessrDifficulty,
    timeoutSeconds: number,
    amount: number
  ) => void;
}
