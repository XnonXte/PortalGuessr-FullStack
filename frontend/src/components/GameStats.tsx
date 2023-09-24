import { GameStatsProps } from "../types/GameStatsProps";

const GameStats = ({
  correctCount,
  incorrectCount,
  totalRounds,
}: GameStatsProps) => {
  return (
    <>
      <div className="py-4 px-2 d-flex flex-column justify-content-center align-items-center">
        <div className="fs-2">{correctCount}</div>
        <span>Correct Answers</span>
      </div>
      <div className="py-4 px-2 d-flex flex-column justify-content-center align-items-center">
        <div className="fs-2">{incorrectCount}</div>
        <span>Incorrect Answers</span>
      </div>
      <div className="py-4 px-2 d-flex flex-column justify-content-center align-items-center">
        <div className="fs-2">{totalRounds}</div>
        <span>Total Rounds</span>
      </div>
    </>
  );
};

export default GameStats;
