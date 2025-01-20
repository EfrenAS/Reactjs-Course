import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar gifts...'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}
