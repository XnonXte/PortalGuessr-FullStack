import { GameStatsDisplay } from "../../../types/proptypes/GameStatsDisplay";

const GameStatsDisplay = ({
  correctCount,
  correctPercentage,
  incorrectCount,
  played,
}: GameStatsDisplay) => {
  return (
    <div className="mb-4">
      <h4 className="text-center">📋 Statistics</h4>
      <div className="d-flex justify-content-center justify-content-md-around align-items-center gap-2 mx-auto border rounded p-3 px-2">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{played}</div>
          <span>Played</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{correctPercentage}</div>
          <span>Correct %</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{correctCount}</div>
          <span>Correct</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="fs-2">{incorrectCount}</div>
          <span>Incorrect</span>
        </div>
      </div>
    </div>
  );
};

export default GameStatsDisplay;
