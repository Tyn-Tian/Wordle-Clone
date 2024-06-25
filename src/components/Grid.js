import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
