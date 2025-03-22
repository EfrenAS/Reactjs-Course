import { useState } from "react"
import { useEffect } from "react"

const localCache = {}


export default function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })

  useEffect(() => {
    fetchData()
  }, [url])

  const setLoading = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const fetchData = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return
    }

    setLoading()
    const response = await fetch(url)

    // Sleep
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          status: response.status,
          message: response.statusText
        }
      })

      return
    }
    
    const data = await response.json()
    
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    localCache[url] = data // Manejo de cache
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
