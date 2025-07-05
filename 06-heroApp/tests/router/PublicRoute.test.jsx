import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRoute } from '../../src/router/PublicRoute'

describe('PublicRoute tests', () => {
  test('should render the children component if user is not authenticated', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <p>Ruta pública</p>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta pública')).toBeTruthy()
  })

  test('should redirect to /marvel if user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '1234',
        name: 'Abigail Barcena'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={<PublicRoute><p>Ruta pública</p></PublicRoute>} />
            <Route path='marvel' element={<h1>Página de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Página de Marvel')).toBeTruthy()
  })
})
