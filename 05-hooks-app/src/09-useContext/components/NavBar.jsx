import { NavLink } from 'react-router'

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center p-3 gap-4">
      <NavLink
        className={({isActive}) => {
          return isActive
            ? 'uppercase text-xs text-pink-300 underline'
            : 'uppercase text-xs text-purple-300 hover:underline'
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({isActive}) => {
          return isActive
            ? 'uppercase text-xs text-pink-300 underline'
            : 'uppercase text-xs text-purple-300 hover:underline'
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({isActive}) => {
          return isActive
            ? 'uppercase text-xs text-pink-300 underline'
            : 'uppercase text-xs text-purple-300 hover:underline'
        }}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  )
}
