import { useState, useMemo } from "react";

import useCounter from "../hooks/useCounter"


const heavyStuff = (counter) => {
  const limit = 4000+counter;

  for (let i = 0; i < limit; i++) {
    console.log(counter);
  }
  return limit;
}

export default function MemoHook() {
  const {counter, increment} = useCounter();
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  }

  const MemorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Memorize</h1>
      <br />
      <div>
        <p>
          Counter: {counter}
        </p>
        <p>Valor en memoria: {MemorizedValue}</p>
        <button
          className="bg-gray-600 text-white p-1 m-2 rounded-sm"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-orange-800 text-white p-1 m-2 rounded-sm"
          onClick={onClick}
        >
          Show/Hidden
        </button>
      </div>
    
    </>
  )
}