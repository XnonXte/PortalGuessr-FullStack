import { useContext } from "react";
import axios from "axios";

import { GuessrContext } from "./Game";
import { GuessrDifficulty } from "../types/GuessrTypes";

import StartingCards from "./StartingCards";

const DEVELOPMENT_SERVER_URI = "http://localhost:5000/chambers/random"; // ! Endpoint only for development, do not use for production!

const GameStart = () => {
  const { setCurrentQuestion, setQuestions, resetCounter, setIsGameRunning } =
    useContext(GuessrContext);

  function handleGameStart(
    difficulty: GuessrDifficulty,
    timeoutSeconds: number,
    amount: number
  ) {
    let difficultyEndpoint;
    switch (difficulty) {
      case "Easy":
        difficultyEndpoint = "/e";
        break;
      case "Medium":
        difficultyEndpoint = "/m";
        break;
      case "Hard":
        difficultyEndpoint = "/h";
        break;
      case "Very Hard":
        difficultyEndpoint = "/vh";
        break;
      case null:
        difficultyEndpoint = "";
        break;
    }

    axios
      .get(`${DEVELOPMENT_SERVER_URI}/${amount + difficultyEndpoint}`)
      .then((response) => {
        const questions = response.data;

        setQuestions(questions);
        setCurrentQuestion(questions[0]);
        resetCounter(timeoutSeconds);
        setIsGameRunning(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        alert(`Error: ${errorMessage}`);
      });
  }

  return (
    <section className="my-4 mx-2">
      <h4 className="text-center mb-4">Select a category to continue</h4>
      <StartingCards handleGameStart={handleGameStart} />
    </section>
  );
};

export default GameStart;
