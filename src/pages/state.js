import { MovieCard } from "@/components/MovieCard";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetButton = () => {
    setCounter(0);
  };
  return (
    <div>
      count: {counter}
      <button
        className="bg-red-300 px-4 rounded-4xl py-2 "
        onClick={incrementCounter}
      >
        +
      </button>
      <button
        className="bg-red-100 px-4 rounded-4xl py-2 "
        onClick={decrementCounter}
      >
        -
      </button>
      <button
        className="bg-red-400 px-4 rounded-4xl py-2 "
        onClick={resetButton}
      >
        reset
      </button>
    </div>
  );
};

export default Home;
