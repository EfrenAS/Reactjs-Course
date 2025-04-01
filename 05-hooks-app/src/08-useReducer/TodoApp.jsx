import useTodo from "../hooks/useTodo";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function TodoApp() {
  const {todos, todosLength, completedTodos, pendingTodos, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodo()

  return (
    <>
      <header className="flex flex-col justify-between items-center gap-8">
        <h1 className="text-3xl font-bold mt-2">Todos App</h1>
        <div className="flex gap-4">
          <small>Todo: <span className="text-blue-500">{todosLength}</span></small>
          <small>Completed: <span className="text-green-500">{completedTodos}</span></small>
          <small>Pending: <span className="text-amber-500">{pendingTodos}</span></small>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-20 mt-10">
        <section>
          <TodoList
            todos={todos}
            onDeleteTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </section>
        <article>
          <AddTodo onNewTodo={handleNewTodo} />
        </article>
      </main>
    </>
  )
}