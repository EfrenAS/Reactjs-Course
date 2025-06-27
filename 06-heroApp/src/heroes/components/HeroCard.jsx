import { Link } from 'react-router'

export default function HeroCard ({ id, superhero, publisher }) {
  const heroImageUrl = `/assets/${id}-min.jpg`

  return (
    <div className='relative flex flex-row gap-4 hover:cursor-pointer overflow-hidden'>
      <Link to={`/hero/${id}`} viewTransition>
        <img
          src={heroImageUrl}
          alt={superhero}
          className='object-cover hover:scale-105 hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer'
          loading='lazy'
          referrerPolicy='no-referrer'
        />
        <h3
          className={`absolute top-0 right-0 p-2 h-full w-1/4 text-amber-50 ${(publisher === 'DC Comics') ? 'bg-blue-700/70' : 'bg-red-700/70'}`}
        >
          <span className='font-extrabold text-3xl rotate-90 block text-nowrap'>
            {superhero}
          </span>
        </h3>
      </Link>
    </div>
  )
}
