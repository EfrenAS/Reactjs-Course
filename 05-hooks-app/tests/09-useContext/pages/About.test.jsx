import { render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/context/UserContext"
import AboutPage from "../../../src/09-useContext/pages/About"

describe('Pruebas en <AboutPage />', () => {
  const user = {
    id: 1,
    name: 'Efrén'
  }

  test('debe de mostrar el componente correctamente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <AboutPage />
      </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText('user-name')
    expect(preTag.innerHTML).toBe('')
  })
  
  test('Debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{user}}>
        <AboutPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('user-name')
    expect(preTag.innerHTML).toBe(user.name)
  })

})