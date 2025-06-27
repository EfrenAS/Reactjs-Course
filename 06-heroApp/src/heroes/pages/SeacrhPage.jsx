import { useLocation, useNavigate } from 'react-router'
import { getUrlParams } from '../../heroes/helpers/getUrlParams'
import useForm from '../../hooks/useForm'
import HeroCard from '../components/HeroCard'
import { getHeroesByName } from '../helpers/getHeroesByName'

function HeroList ({ heroes }) {
  return (
    heroes.map(hero => (
      <HeroCard
        key={hero.id}
        id={hero.id}
        superhero={hero.superhero}
        publisher={hero.publisher}
      />
    ))
  )
}

function MessageFoundAHero () {
  return (
    <p className='text-center text-gray-500'>Find to favorite Hero</p>
  )
}

function MessageHeroesNotFound () {
  return (
    <p className='text-center text-red-400'>No heroes found</p>
  )
}

export default function SearchPage () {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = getUrlParams({ query: location.search })

  const heroes = getHeroesByName(q)

  const { handleOnChange, searchHero } = useForm({
    searchHero: q
  })

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const textSearchHero = searchHero.toLowerCase().trim()

    if (textSearchHero.length <= 2) return

    navigate(`?q=${textSearchHero}`, { viewTransition: true })
  }

  return (
    <main className='md:w-2/3 h-[calc(100vh-5rem)] mx-auto'>
      <section aria-labelledby='search-hero' className='p-2'>
        <header className='flex flex-col gap-2 items-center'>
          <h1 className='text-center uppercase text-xl font-bold text-amber-500'>Find your favorite hero</h1>
          <form
            className='flex align-center gap-8 p-5 w-full justify-evenly flex-col sm:flex-row @container'
            onSubmit={handleOnSubmit}
          >
            <input
              type='text'
              placeholder='batman, superman, spiderman, ironman...'
              name='searchHero'
              aria-label='search hero'
              className='border-b-1 border-gray-500 p-2 focus:outline-none focus:border-amber-500 w-full @xs:w-7/12'
              value={searchHero}
              onChange={handleOnChange}
            />
            <button className='bg-amber-500/50 px-1 py-0.5 rounded-xs hover:bg-amber-600 transition-all duration-300 ease-in-out cursor-pointer'>Find hero</button>
          </form>
        </header>
      </section>
      <section aria-labelledby='hero-info' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
        {
          (q === '') && <MessageFoundAHero />
        }
        {
          heroes.length === 0 && q.length > 2
            ? (
              <MessageHeroesNotFound />
              )
            : (
              <HeroList heroes={heroes} />
              )
        }
      </section>
    </main>
  )
}
