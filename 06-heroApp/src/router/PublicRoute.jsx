import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/context/AuthContext'

export function PublicRoute ({ children }) {
  const { logged } = useContext(AuthContext)

  return (!logged) ? children : <Navigate to='/marvel' />
}
