import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { getHeroById } from '../helpers/getHeroById'

function HeroNotFound () {
  return (
    <Navigate to='/marvel' />
  )
}

function HeroInfo ({ hero }) {
  const heroLogoUrl = (hero.publisher === 'DC Comics')
    ? '/assets/dc.svg'
    : '/assets/marvel.svg'

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1, { viewTransition: true })
  }

  return (
    <main className='md:w-2/3 h-[calc(100vh-5rem)] mx-auto p-5 flex flex-col sm:flex-row gap-5'>
      <section className='w-2xs'>
        <img src={`/assets/${hero.id}-min.jpg`} alt={hero.superhero} className='w-full h-auto object-cover rounded-lg' />
      </section>
      <article className='flex flex-col gap-7'>
        <div className='flex flex-row gap-5 items-center justify-between'>
          <h1 className='text-4xl font-bold text-amber-500'>{hero.superhero}</h1>
          <img
            src={heroLogoUrl}
            alt={hero.publisher}
            className='w-15 object-cover rounded-sm'
          />
        </div>
        <p className='flex flex-col gap-0.5'>
          <small className='text-gray-500'>Alter ego</small>
          <span className='text-xl'>{hero.alter_ego}</span>
        </p>
        <p className='flex flex-col gap-0.5'>
          <small className='text-gray-500'>First appearance</small>
          <span className='text-xl'>{hero.first_appearance}</span>
        </p>
        <p className='flex flex-col gap-0.5'>
          <small className='text-gray-500'>Characters</small>
          <span className='text-xl'>{hero.characters}</span>
        </p>
        <button onClick={onNavigateBack} className='text-amber-500 hover:text-amber-700 transition-colors duration-300 ease-in-out cursor-pointer'> &#11164; Back to {hero.publisher}</button>
      </article>
    </main>
  )
}

export default function HeroPage () {
  const { heroId } = useParams()
  const hero = useMemo(() => getHeroById(heroId), [heroId])
  return (
    <>
      {
        hero
          ? (
            <HeroInfo hero={hero} />
            )
          : (
            <HeroNotFound />
            )
      }
    </>
  )
}
