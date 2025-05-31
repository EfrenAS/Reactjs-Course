import { render, screen } from '@testing-library/react'
import TodoApp from '../../src/08-useReducer/TodoApp'
import useTodo from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Todo test',
        done: false
      },
      {
        id: 2,
        description: 'Todo test 2',
        done: false 
      }
    ],
    todosLength: 2,
    completedTodos: 0,
    pendingTodos: 2,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  })

  test('debe de mostrar el componente correctamente', () => {
    render(
      <TodoApp />
    )
    expect(screen.getByText('Todo test')).toBeTruthy()
    expect(screen.getByText('Todo test 2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})