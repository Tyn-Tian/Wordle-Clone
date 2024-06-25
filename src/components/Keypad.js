import { useEffect, useState } from "react";

const Keypad = () => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await fetch("http://localhost:8080/letters");
        const data = await response.json();
        setLetters(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLetters();
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          return <div key={letter.key}>{letter.key}</div>;
        })}
    </div>
  );
};

export default Keypad;
