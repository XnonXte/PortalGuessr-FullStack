import { GuessrProps } from "../types/GuessrProps";

const Guessr = ({
  image,
  current,
  max,
  timeoutCounter,
  difficulty,
}: GuessrProps) => {
  let difficultyColor;
  switch (difficulty) {
    case "Easy":
      difficultyColor = "success";
      break;
    case "Medium":
      difficultyColor = "warning";
      break;
    case "Hard":
      difficultyColor = "danger";
      break;
    case "Very Hard":
      difficultyColor = "primary";
      break;
  }

  function formatTimeoutCounter(timeoutSeconds: number) {
    // Function to format the timer to "00:00"
    const minutes = Math.floor(timeoutSeconds / 60);
    const seconds = timeoutSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <section className="my-4 mx-2 d-flex flex-column justify-content-center align-items-center">
      <h4 className="mb-4 px-1">
        <i className="bi bi-stopwatch-fill"></i>{" "}
        {formatTimeoutCounter(timeoutCounter)}
      </h4>
      <img
        src={image}
        alt="Chamber image"
        className="img-fluid rounded-3 w-75 h-auto"
      />
      <div className="mt-4 d-flex align-items-center gap-2">
        <span className="fw-bold py-2 px-1 border rounded bg-pg-dark">
          {current} / {max}
        </span>
        <span
          className={`py-2 px-1 border rounded bg-pg-${difficultyColor} text-pg-${
            difficulty === "Very Hard" ? "light" : "dark"
          }`}
        >
          {difficulty}
        </span>
      </div>
    </section>
  );
};

export default Guessr;
