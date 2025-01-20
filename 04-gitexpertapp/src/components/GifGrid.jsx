import GifCard from './GifCard'
import useFetchGifs from '../hooks/useFetchGifs'

export default function GifGrid ({ category }) {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <main className='card-grid'>
      {isLoading && <p>Loading...</p>}
      <section>
        <h2>{category}</h2>
        {
          gifs.map(({ id, title, url }) => (
            <GifCard key={id} title={title} url={url} />
          ))
        }
      </section>
    </main>
  )
}
