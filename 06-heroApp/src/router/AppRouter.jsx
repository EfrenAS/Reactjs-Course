import { Route, Routes } from 'react-router'
import Login from '../auth/pages/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export default function AppRouter () {
  return (
    <>
      <Routes>
        <Route
          path='login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>

    </>
  )
}
