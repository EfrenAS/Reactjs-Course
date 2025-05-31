import useCounter from "../hooks/useCounter"
import useFetch from "../hooks/useFetch"

import LoadingMessage from "./componnents/LoadingMessage"
import PokemonCard from "./componnents/PokemonCard"

export default function MultipleCustomHooks() {
  const {counter, increment, decrement} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 p-4">
          <h1 className="font-bold uppercase">información de <span className="text-amber-400">{data?.name}</span></h1>
        <div>
          <button
            className="bg-gray-700 text-white px-2 py-1 m-1 rounded-md cursor-pointer hover:text-amber-400"
            onClick={decrement}
          >
            Prev
          </button>
          <button
            className="bg-gray-700 text-white px-2 py-1 m-2 rounded-md cursor-pointer hover:text-amber-400"
            onClick={increment}
            >
              Next
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center gap-4 p-4 h-100">
        {
          isLoading 
            ? <LoadingMessage />
            : <PokemonCard
                id={ data?.id }
                sprites={ [
                    data?.sprites?.front_default,
                    data?.sprites?.back_default,
                  ]
                }
              />
        }
        {hasError && <p>Error: {data.error.message}</p>}
      </main>
    </>
  )
}