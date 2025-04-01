import useForm from "../../hooks/useForm";

export default function AddTodo({onNewTodo}) {
  const {description, handleOnChange, handleOnReset} = useForm({
    description: ""
  })

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (description.length < 5) return
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }

    onNewTodo(newTodo)
    handleOnReset()
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <div className="flex gap-4 items-center">
        <label htmlFor="new-todo">New Todo:</label>
        <input
          type="text"
          id="new-todo"
          name="description"
          className="bg-gray-900 text-white px-2 py-1 rounded-sm w-80"
          placeholder="Recolectar la gema del tiempo..."
          value={description}
          onChange={handleOnChange}
        />
      </div>
      <button 
        className="bg-green-900 text-white px-2 py-1 rounded-sm w-40 cursor-pointer hover:bg-green-800"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}