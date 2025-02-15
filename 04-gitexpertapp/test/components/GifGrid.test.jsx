import { render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Test to <GifGrid />', () => {
  
  const category = "Lee"

  test('Should render a loading message', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    })

    render(<GifGrid category={category}/>)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))

  })

  test('Should render a list of itmesn when data is available from useFetchGifs', () => {
    const gifs = [
      {
        id: 1,
        title: 'Lee',
        url: 'https://media.giphy.com/media/l0Iy8w3u8s0w0/giphy.gif'
      },
      {
        id: 2,
        title: 'Lee',
        url: 'https://media.giphy.com/media/l0Iy8w3u8s0w0/giphy.gif'
      },
      {
        id: 3,
        title: 'Lee',
        url: 'https://media.giphy.com/media/l0Iy8w3u8s0w0/giphy.gif'
      }
    ]

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false
    })

    render(<GifGrid category={category}/>)

    expect(screen.getAllByRole('img').length).toBe(3)
  })
})
