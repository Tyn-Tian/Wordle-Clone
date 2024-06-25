import { useEffect } from "react";
import useWorlde from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWorlde(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  );
};

export default Wordle;
