import { useEffect } from "react";
import useWorlde from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, turn, isCorrect } =
    useWorlde(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  );
};

export default Wordle;
