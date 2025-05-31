import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import useCounter from "../../src/hooks/useCounter"
import useFetch from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('MultipleCustomHooks test', () => {
  const mockIncrement = jest.fn()
  const mockDecrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostrar el componente por defect', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })

    render(<MultipleCustomHooks/>)

    expect(screen.getByText('información de'))

    const nextButton = screen.getByRole('button', {name: 'Next'})
    const prevButton = screen.getByRole('button', {name: 'Prev'})
    
    expect(nextButton).toBeDefined()
    expect(prevButton).toBeDefined()
  })

  test('debe de mostrar el pokemon', () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: 'bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    })

    render(<MultipleCustomHooks/>)

    expect(screen.getByText('bulbasaur')).toBeTruthy()
  })

  test('debe de llamar a la función incrementar', () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: 'bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    })

    render(<MultipleCustomHooks/>)

    const nextButton = screen.getByRole('button', {name: 'Next'})

    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalled()

  })
})
