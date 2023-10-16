// TODO: Fix the bug with the bug of incorrectly counting correct/incorrect count (might be an internal issue).

import DifficultiesDisplay from "./HistoryDifficulties";
import GameStatsDisplay from "./HistoryStats";
import ShareStats from "./Share";
import { getHistoryDifficulties } from "../../utils/getHistoryDifficulties";
import { getHistoryStats } from "../../utils/getHistoryStats";
import { GuessrStatistic } from "../../../types/utiltypes/GuessrGameTypes";

const StatsDisplay = () => {
  const guessrStatistics = JSON.parse(
    localStorage.getItem("USER_STATS") || "[]"
  ) as GuessrStatistic[];

  const { correctCount, correctPercentageDisplay, incorrectCount, played } =
    getHistoryStats(guessrStatistics);
  const { easyCount, hardCount, mediumCount, veryHardCount } =
    getHistoryDifficulties(guessrStatistics);

  return (
    <section className="my-4 mx-2">
      <GameStatsDisplay
        played={played}
        correctPercentage={correctPercentageDisplay}
        incorrectCount={incorrectCount}
        correctCount={correctCount}
      />
      <DifficultiesDisplay
        easyCount={easyCount}
        mediumCount={mediumCount}
        hardCount={hardCount}
        veryHardCount={veryHardCount}
      />
      <ShareStats />
    </section>
  );
};

export default StatsDisplay;
