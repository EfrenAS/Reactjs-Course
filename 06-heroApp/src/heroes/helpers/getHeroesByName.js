import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
  const nameSearch = name.toLowerCase().trim()

  if (nameSearch.length === 0) return []

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(nameSearch))
}
