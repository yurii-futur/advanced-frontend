import { useState } from "react";
import "./Counter.scss"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
