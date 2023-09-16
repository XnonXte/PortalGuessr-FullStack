import { PortalChamberNumber } from "./guessr";

export interface AnswerFormProps {
  onAnswer: (chamber: PortalChamberNumber) => void;
}
