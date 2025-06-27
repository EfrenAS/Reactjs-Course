import { heroes } from '../data/heroes'

export const PUBLISHERS = ['DC Comics', 'Marvel Comics']

export function filterHeroesByPublisher (publisher) {
  if (!PUBLISHERS.includes(publisher)) {
    throw new Error(`Publisher ${publisher} is not valid`)
  }

  return heroes.filter((hero) => hero.publisher === publisher)
}
