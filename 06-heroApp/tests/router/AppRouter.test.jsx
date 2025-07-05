import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { AuthContext } from '../../src/auth/context/AuthContext'
import AppRouter from '../../src/router/AppRouter'

describe('<AppRouter> tests', () => {
  test('should render the login page if user is not authenticated', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Login')).toBeTruthy()
  })

  test('should render the marvel page if user is authenticated', () => {
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
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText('Marvel')).toHaveLength(1)
  })
})
