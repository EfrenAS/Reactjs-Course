import { render, screen, fireEvent } from "@testing-library/react"
import CounterApp from "../src/CounterApp.jsx"

describe("Pruebas en <CounterApp />", () => {
  const initialValue = 10
  const currentValue = 100

  test("Debe de hacer match con el snapshot", () => {
    const {container} = render(<CounterApp value={currentValue} />)

    expect(container).toMatchSnapshot()
  })

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={currentValue} />)

    expect(screen.getByText(currentValue)).toBeTruthy()
    expect(screen.getByTestId("test-counter").innerHTML).toContain(currentValue.toString())
  })

  test("Debe de incrementar el valor en 1", () => {
    render(<CounterApp value={initialValue} />)

    fireEvent.click(screen.getByText("+1"))
    expect(screen.getByText('11')).toBeTruthy()

  })

  test("Debe de decremnentar el valor en 1", () => {
    render(<CounterApp value={initialValue} />)

    fireEvent.click(screen.getByText("-1"))
    expect(screen.getByText('9')).toBeTruthy()

  })

  test("Debe de resetear el valor a 10", () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))
    fireEvent.click(screen.getByText("+1"))

    //fireEvent.click(screen.getByText("Reset"))

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" })) //aria-label='btn-reset' is a explcit label

    expect(screen.getByText('10')).toBeTruthy()
  })

})