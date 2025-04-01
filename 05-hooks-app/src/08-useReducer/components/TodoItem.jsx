export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  
  return (
    <li className="flex justify-between gap-4 p-2">
      <span
        className={`${(todo.done) ? "line-through" : ""}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button 
        className="bg-red-900 text-white px-2 py-1 rounded-sm cursor-pointer hover:bg-red-800"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>    
  )
}