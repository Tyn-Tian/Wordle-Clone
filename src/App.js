import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await fetch("http://localhost:8080/solutions");
        const data = await response.json();
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.word);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSolution();
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle Clone React App</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
