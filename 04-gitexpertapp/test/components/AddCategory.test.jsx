import { render, screen, fireEvent } from "@testing-library/react"
import AddCategory from '../../src/components/AddCategory'

describe('<AddCategory /> test', () => {
  test('Should change input value', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Lee' } })
    expect(input.value).toBe('Lee')
  })

  test('Should call onNewCategory if input get a new value', () => {
    const inputValue = 'Lee'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('Should not call onNewCategory if input is a empty string', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })
})