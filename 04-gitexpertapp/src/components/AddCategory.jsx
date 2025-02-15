import { useState } from 'react'
import propTypes from 'prop-types';

export default function AddCategory ({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => setInputValue(target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    const newCategory = inputValue.trim()

    if (newCategory.length <= 1) return

    setInputValue('')
    onNewCategory(newCategory)
  }

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gifts...'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: propTypes.func.isRequired
}
