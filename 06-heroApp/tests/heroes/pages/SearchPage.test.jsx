import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import SearchPage from '../../../src/heroes/pages/SearchPage'

describe('<SearchPage /> tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  vi.mock(import('react-router'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
      ...actual,
      navigate: vi.fn()
    }
  })

  test('should render the search page', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('Should render the search page with a Batman and the input field with the value of queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    const img = screen.getByRole('img')

    expect(input.value).toBe('batman')
    expect(img.src).toContain('/assets/dc-batman-min.jpg')
    expect(screen.queryByText('Find to favorite Hero')).toBeFalsy()
  })

  test('Should render the message "No heroes found" when the search is empty or not found any hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByText('No heroes found')).toBeTruthy()
  })

  test('Should call navigate when the form is submitted', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { name: 'searchHero', value: 'batman' } })
    fireEvent.submit(form)

    expect(vi.fn()).toHaveBeenCalledWith('?q=batman', { viewTransition: true })
  })
})
