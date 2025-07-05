import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import Navbar from '../../../src/ui/components/Navbar'

describe('<Navbar> tests', () => {
  const contextValues = {
    logged: true,
    user: {
      id: '136',
      name: 'Tachito'
    }
  }

  afterEach(() => {
    cleanup()
  })

  test('should render the navbar and show the name of user', () => {
    render(
      <AuthContext.Provider value={contextValues}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText(contextValues.user.name)).toBeTruthy()
  })

  test('should call logout when user clicks on logout button', () => {
    const mockLogout = vi.fn()

    render(
      <AuthContext.Provider value={{ ...contextValues, logout: mockLogout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockLogout).toHaveBeenCalled()
  })
})
