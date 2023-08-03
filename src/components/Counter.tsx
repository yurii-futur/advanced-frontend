import { useState } from "react";
import classes from "./Counter.module.scss"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={classes.button}>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
