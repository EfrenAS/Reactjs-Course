import { useMemo } from 'react'
import { filterHeroesByPublisher } from '../helpers/filterHeroesByPublisher'
import HeroCard from './HeroCard'

export default function HeroList ({ publisher }) {
  const heroes = useMemo(() => filterHeroesByPublisher(publisher), [publisher])

  return (
    <main className='md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
      {
        heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            superhero={hero.superhero}
            publisher={hero.publisher}
            viewTransition
          />
        ))
      }
    </main>
  )
}
