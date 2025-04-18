import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {
        todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}