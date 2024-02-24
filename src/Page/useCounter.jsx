import { useState } from "react";

export const useCounter = (initialstate) => {
  const [count, setCount] = useState(initialstate);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialstate);

  return { count, increment, decrement, reset };
};
