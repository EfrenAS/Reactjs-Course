import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp () {
  const [categories, setCategories] = useState(['Dragon Ball'])

  const handleChangeCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories((categories) => [newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => handleChangeCategory(value)} />

      <section>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </section>
    </>
  )
}
