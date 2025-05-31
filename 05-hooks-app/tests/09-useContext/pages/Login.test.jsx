import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/context/UserContext"
import LoginPage from "../../../src/09-useContext/pages/Login"

describe('<LoginPage />', () => {
  test('Debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('user-info')
    expect(preTag.innerHTML).toBe('null')
  })

  test('Debe de llamar el setUser cunado se hace click en el botón', () => {
    const handleLoginNock = jest.fn()

    render(
      <UserContext.Provider value={{setLogin: handleLoginNock}}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleLoginNock).toHaveBeenCalledWith({
      name: 'John',
      age: 30,
      email: 'john@gmail.com',
      isAdmin: true,
    })
  })
})