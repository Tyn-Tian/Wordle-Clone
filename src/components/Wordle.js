import { useEffect } from "react";
import useWorlde from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWorlde(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return <div>Current Guess : {currentGuess}</div>;
};

export default Wordle;
