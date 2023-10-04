import { useContext } from "react";

import axios from "axios";

import StartingCards from "../cards/StartingCards";

import { GuessrContext } from "./Game";

import { convertToAbbreviate } from "../../utils/convertToAbbreviate";

import { GuessrDifficulty } from "../../types/GuessrGameType";

// ! Endpoint only for development, do not use for production!
const DEVELOPMENT_URL = "http://localhost:5000/chambers/random";

const GameStart = () => {
  const { setCurrentQuestion, setQuestions, resetCounter, setIsGameRunning } =
    useContext(GuessrContext);

  function handleGameStart(
    difficulty: GuessrDifficulty,
    timeoutSeconds: number,
    amount: number
  ) {
    const difficultyAbbreviate = convertToAbbreviate(difficulty);
    const endpoint = `${DEVELOPMENT_URL}/${
      amount + (difficultyAbbreviate !== null ? `/${difficultyAbbreviate}` : "")
    }`; // Goofy workaround.

    async function fetchQuestions() {
      try {
        const response = await axios.get(endpoint);
        const questions = response.data;

        setQuestions(questions);
        setCurrentQuestion(questions[0]);
        resetCounter(timeoutSeconds);
        setIsGameRunning(true);
      } catch (error) {
        alert(`An error occurred: ${error}`);
      }
    }

    fetchQuestions();
  }

  return (
    <section className="my-4 mx-2">
      <h4 className="text-center mb-4">Select a category to continue</h4>
      <StartingCards handleGameStart={handleGameStart} />
    </section>
  );
};

export default GameStart;
