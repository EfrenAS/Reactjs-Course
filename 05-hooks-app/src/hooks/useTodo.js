import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []
const init = () => JSON.parse(localStorage.getItem("todos")) || []

export default function useTodo() {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = todo => {
    const action =  {
      type: 'ADD_TODO',
      payload: todo
    }
    
    dispatch(action)
  }

  const handleRemoveTodo = id => {
    const action =  {
      type: 'REMOVE_TODO',
      payload: id
    }

    dispatch(action)
  }

  const handleToggleTodo = id => {
    const action =  {
      type: 'TOGGLE_TODO',
      payload: id
    }

    dispatch(action)
  }

  return {
    todos,
    todosLength: todos.length,
    completedTodos: todos.filter(todo => todo.done).length,
    pendingTodos: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
}