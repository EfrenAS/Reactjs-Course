import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../../auth/context/AuthContext'

export default function Navbar () {
  const navigate = useNavigate()

  const { user, logout } = useContext(AuthContext)

  const onLogout = () => {
    logout()
    navigate('/login', {
      replace: true,
      viewTransition: true
    })
  }

  return (
    <nav className='flex gap-10 p-5 border-b-1 border-gray-500 align-center items-center justify-between'>
      <Link
        to='/'
        className='hover:text-amber-500 transition-colors duration-300 ease-in-out text-xl font-bold'
        viewTransition
      >
        Heroes App
      </Link>
      <div className='flex gap-5'>
        <NavLink
          to='/marvel'
          className={({ isActive }) =>
            `hover:text-amber-500 transition-colors duration-300 ease-in-out
              ${isActive ? 'font-bold text-amber-200' : ''}`}
          viewTransition
        >
          Marvel
        </NavLink>
        <NavLink
          to='/dc'
          className={({ isActive }) =>
            `hover:text-amber-500 transition-colors duration-300 ease-in-out
              ${isActive ? 'font-bold text-amber-200' : ''}`}
          viewTransition
        >
          DC
        </NavLink>
        <NavLink
          to='/search'
          className={({ isActive }) =>
            `hover:text-amber-500 transition-colors duration-300 ease-in-out
              ${isActive ? 'font-bold text-amber-200' : ''}`}
          viewTransition
        >
          Search
        </NavLink>
      </div>
      <button
        className=' bg-amber-500/50 px-2 py-1 rounded hover:bg-amber-600 transition-all duration-300 ease-in-out cursor-pointer'
        onClick={onLogout}
      >
        {user?.name}
      </button>
    </nav>
  )
}
