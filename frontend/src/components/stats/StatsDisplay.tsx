import DifficultiesDisplay from "./DifficultiesDisplay";
import GameStatsDisplay from "./GameStatsDisplay";
import ShareStats from "./ShareStats";

const StatsDisplay = () => {
  return (
    <section className="my-4 mx-2">
      {/* @Dummy */}
      <GameStatsDisplay
        played={10}
        correctPercentage="50%"
        incorrectCount={50}
        correctCount={50}
      />
      <DifficultiesDisplay
        easyCount={20}
        mediumCount={15}
        hardCount={50}
        veryHardCount={15}
      />
      <ShareStats />
    </section>
  );
};

export default StatsDisplay;
