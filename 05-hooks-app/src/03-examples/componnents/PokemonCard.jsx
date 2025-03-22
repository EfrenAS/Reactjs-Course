export default function PokemonCard({id, pokemonName,sprites = []}) {
  return (
    <div>
      <h1>ID: { id }</h1>
      <img src={sprites[0]} alt={`sprite-${pokemonName}`} />
      <img src={sprites[1]} alt={`sprite-${pokemonName}`} />
    </div>
  )
}