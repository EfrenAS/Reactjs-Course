import { useState } from 'react'

export default function useCounter(initialValue = 1) {
  const [counter, setCounter] = useState(initialValue)

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset
  }
}