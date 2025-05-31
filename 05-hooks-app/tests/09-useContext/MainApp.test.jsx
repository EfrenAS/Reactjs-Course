import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import MainApp from "../../src/09-useContext/MainApp"

describe('<MainApp />', () => {
  test('Debe de mostrar el Home Page', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getAllByText('Main App')).toBeTruthy()
  })

  test('Debe de mostrar el About Page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getAllByText('About Page')).toBeTruthy()
  })

  
})