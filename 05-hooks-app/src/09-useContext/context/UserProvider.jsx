import { useState } from 'react'
import { UserContext } from './UserContext'
export const UserProvider = ({children}) => {
  const [user, setUser] = useState({})

  const handleLogin = (newUser) => setUser(newUser)

  return (
    <UserContext.Provider value={{user, handleLogin}}>
      {children}
    </UserContext.Provider>
  )
}
