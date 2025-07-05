import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test, vi } from 'vitest'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PrivateRoute } from '../../src/router/PrivateRoute'

describe('<PrivateRoute> tests', () => {
  test('should render the children component if user is authenticated', () => {
    const mockSetItem = vi.fn()
    vi.stubGlobal('localStorage', {
      setItem: mockSetItem
    })

    const contextValue = {
      logged: true,
      user: {
        id: '1234',
        name: 'Abigail Barcena'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <p>Ruta privada</p>
          </PrivateRoute>
        </MemoryRouter>

      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta privada')).toBeTruthy()
    expect(mockSetItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')
  })
})
