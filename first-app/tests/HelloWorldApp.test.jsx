import { render, screen } from "@testing-library/react"
import HelloWorldApp from "../src/HelloWorldApp.jsx"

describe("Pruebas en <HelloWorldApp />", () => {
  const title = "Hello Efrén Anastacio"
  
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<HelloWorldApp />)
    
    expect(container).toMatchSnapshot()
  })

  test("Debe de mostrar el nombre de Efrén dentro de un h1", () => {
    render(<HelloWorldApp />)
    // const h1 = container.querySelector("h1")

    // expect(h1.innerHTML).toBe(title)
    
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByTestId("test-title").innerHTML).toContain(title)
  })
})