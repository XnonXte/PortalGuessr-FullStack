export type PortalChamberNumber =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "e00"
  | "e02"
  | "e02"
  | null;

export interface GuessrQuestions {
  url: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";
  answer: PortalChamberNumber;
}

export interface GuessrHistory extends GuessrQuestions {
  userAnswer: PortalChamberNumber;
  isUserAnswerCorrect: boolean;
  historyId: string;
}
