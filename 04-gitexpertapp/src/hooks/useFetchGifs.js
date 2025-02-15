import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export default function useFetchGifs (category) {
  const [gifs, setGifs] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getGifsToGyphy = async () => {
    const newsGifs = await getGifs(category)
    setGifs(newsGifs)
    setLoading(false)
  }

  useEffect(() => {
    getGifsToGyphy()
  }, [])

  return {
    gifs,
    isLoading
  }
}
