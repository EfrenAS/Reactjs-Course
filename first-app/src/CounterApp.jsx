import PropTypes from 'prop-types'
import { useState } from 'react'

export default function CounterApp ({ value }) {
  const [counter, setCounter] = useState(value)
  const handleAdd = () => setCounter(counter + 1)
  const hadleMinus = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid='test-counter'>{counter}</h2>
      <div className='cr-content-buttons'>
        <button onClick={handleAdd}> +1 </button>
        <button onClick={hadleMinus}> -1 </button>
        <button aria-label='btn-reset' onClick={handleReset}> Reset </button>
      </div>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
