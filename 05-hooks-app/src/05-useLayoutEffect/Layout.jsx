import { useRef, useLayoutEffect, useState } from "react"

import useFetch from "../hooks/useFetch"
import useCounter from "../hooks/useCounter"

import LoadingMessage from "../03-examples/componnents/LoadingMessage"
import PokemonCard from "../03-examples/componnents/PokemonCard"

export default function Layout() {
  const {counter, increment, decrement} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  const spanRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = spanRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [data])

  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 p-4">
          <h1 className="font-bold uppercase">información de <span ref={spanRef} className="text-amber-400">{data?.name}</span></h1>
          <p>Dimensiones: {boxSize.width}x{boxSize.height}</p>
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