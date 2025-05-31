import { useState } from 'react';

export default function useCounter(initialValue = 1) {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => setCounter(current => current + value);
  const decrement = (value = 1) => setCounter(current => current - value)
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset
  }
}