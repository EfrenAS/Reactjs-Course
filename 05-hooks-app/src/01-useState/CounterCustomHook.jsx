import useCounter from "../hooks/useCounter";

export default function CounterCustomHook() {
  const { counter, increment, decrement, reset } = useCounter(10)

  return (
    <>
      <h2>CounterCustomHook {counter}</h2>
      <hr />

      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}