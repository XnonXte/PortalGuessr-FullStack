export interface GuessrProps {
  image: string;
  current: number;
  max: number;
  timeoutCounter: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";
}
