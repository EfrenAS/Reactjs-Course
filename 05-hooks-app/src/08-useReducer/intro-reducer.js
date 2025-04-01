const initalState = [
  {
    id: 1,
    todo: "Recolectar la gema del alma",
    done: false,
  }
]

const todoReducer = (state=initalState, action= {}) => {
  if (action.type === "ADD_TODO") { return [...state, action.payload] }

  return state;
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: "Recolectar la gema del poder",
  done: false,
}

const Addtodo = {
  type: "ADD_TODO",
  payload: newTodo,
}

todos = todoReducer(todos, Addtodo)

console.log(todos)