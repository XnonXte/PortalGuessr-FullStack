import { GuessrDifficulty } from "../types/GuessrGameType";

export interface StartingCardsProps {
  handleGameStart: (
    difficulty: GuessrDifficulty,
    timeoutSeconds: number,
    amount: number
  ) => void;
}
