import { renderHook, waitFor } from '@testing-library/react'
import useFetchGifs from '../../src/hooks/useFetchGifs'

describe('Test to useFetchGifs', () => {
  test('Should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Lee'))

    const {gifs, isLoading} = result.current

    expect(gifs.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Should return the gifs array and false for isLoading when data is not available', async () => {
    const { result } = renderHook(() => useFetchGifs('Lee'))

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    )

    const {gifs, isLoading} = result.current

    expect(gifs.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
