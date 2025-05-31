import { fireEvent, render, screen } from "@testing-library/react"
import TodoItem from "../../../src/08-useReducer/components/TodoItem"

describe('<TodoItem />', () => {
  const onToggleTodoMock = jest.fn()
  const onDeleteTodoMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const todo = {
    id: 1,
    description: 'Todo test',
    done: false
  }

  test('Debe de mostrar el todo pendiente de completar', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('flex justify-between gap-4 p-2')

    const spanElement = screen.getByLabelText('todo_span')
    expect(spanElement.textContent).toBe(todo.description)
    expect(spanElement.className).not.toContain('line-through')
  })

  test('Debe de mostrar el todo completado', () => {
    todo.done = true
    render(
      <TodoItem 
        todo={todo} 
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('todo_span')
    expect(spanElement.className).toContain('line-through')
  })

  test('Debe de llamar a la función onToggleTodo', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('todo_span')
    fireEvent.click(spanElement)
    
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('Debe de llamar a la función onDeleteTodo', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})