import { useState } from "react";

import useCounter from "../hooks/useCounter"

import { Small } from "./Small";

export default function Memorize() {
  const {counter, increment} = useCounter();
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  }

  return (
    <>
      <h1>Memorize</h1>
      <br />
      <div>
        <p>
          Counter: {counter}
        </p>
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
          <Small value={show} />
        </button>
      </div>
    
    </>
  )
}