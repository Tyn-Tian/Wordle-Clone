import { useEffect, useState } from "react";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await fetch("http://localhost:8080/solutions");
        const data = await response.json();
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSolution();
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle Clone React App</h1>
      {solution && <p>Solution is {solution.word}</p>}
    </div>
  );
}

export default App;
