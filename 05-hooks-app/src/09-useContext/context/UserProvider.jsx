import { useState } from 'react'
import { UserContext } from './UserContext'
export const UserProvider = ({children}) => {
  const [user, setUser] = useState({})

  const setLogin = (newUser) => setUser(newUser)

  return (
    <UserContext.Provider value={{user, setLogin}}>
      {children}
    </UserContext.Provider>
  )
}
