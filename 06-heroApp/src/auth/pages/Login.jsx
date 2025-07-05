import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

export default function Login () {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const imgIronMaskUrl = '/assets/ironmask-min.png'

  const { login } = useContext(AuthContext)

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Efren Anastacio')

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative'>
      <div className='absolute'>
        <img
          src={imgIronMaskUrl}
          alt='IronMan Mask'
          className={`object-cover transition-all duration-300 ease-in-out cursor-pointer ${isHovered ? 'opacity-100' : 'opacity-35'}`}
        />
      </div>
      <div className='absolute bottom-7 z-10 w-full max-w-md p-8  flex items-end'>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 ease-in-out cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}
