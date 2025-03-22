import { useState, useCallback } from 'react'

import PlusButtom from './PlusButton'

export default function CallbackHook() {

  const [counter, setCounter] = useState(0)
  const increment = useCallback((value) => {
    setCounter((currentCounter) => currentCounter + value)
  }, [])

  return (
    <>
      <h1>Callback Hook</h1>
      <p>Counter: {counter}</p>
      <PlusButtom increment={increment} />
    </>
  )
}