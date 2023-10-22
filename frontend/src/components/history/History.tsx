import { useRef } from "react";
import html2canvas from "html2canvas";
import HistoryDifficulties from "./HistoryDifficulties";
import HistoryStats from "./HistoryStats";
import Share from "./Share";
import { getHistoryDifficulties } from "../../utils/getHistoryDifficulties";
import { getHistoryStats } from "../../utils/getHistoryStats";
import { GuessrStatistic } from "../../../types/utiltypes/GuessrGameTypes";

const History = () => {
  const screenshotRef = useRef(null);
  const guessrStatistics = JSON.parse(
    localStorage.getItem("USER_STATS") || "[]"
  ) as GuessrStatistic[];

  const { correctCount, correctPercentageDisplay, incorrectCount, played } =
    getHistoryStats(guessrStatistics);
  const { easyCount, hardCount, mediumCount, veryHardCount } =
    getHistoryDifficulties(guessrStatistics);

  function handleScreenshotClick() {
    const screenshotId = crypto.randomUUID();

    if (!screenshotRef.current) {
      return;
    }

    html2canvas(screenshotRef.current).then((canvas) => {
      const screenshotUrl = canvas.toDataURL("image/jpeg");

      // Download screenshot.
      const anchor = document.createElement("a");
      anchor.href = screenshotUrl;
      anchor.download = `screenshot-${screenshotId}`;
      anchor.click();
    });
  }

  return (
    <section className="my-4 mx-2">
      <div
        ref={screenshotRef}
        style={{
          background:
            "linear-gradient(90deg,hsl(220, 60%, 8%) 20%,hsl(320, 25%, 6%) 80%)",
        }}
      >
        <HistoryStats
          played={played}
          correctPercentage={correctPercentageDisplay}
          incorrectCount={incorrectCount}
          correctCount={correctCount}
        />
        <HistoryDifficulties
          easyCount={easyCount}
          mediumCount={mediumCount}
          hardCount={hardCount}
          veryHardCount={veryHardCount}
        />
      </div>
      <Share onScreenshotClick={handleScreenshotClick} />
    </section>
  );
};

export default History;
