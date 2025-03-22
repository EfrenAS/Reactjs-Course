import useForm from "../hooks/useForm"

export default function FormWithCustomHoook() {
  const {formState, handleOnChange, handleOnReset} = useForm({
    username: "",
    email: "",
    password: ""
  })

  const {username, email, password} = formState

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
      <h1>Simple Form</h1>
      <hr />
      <form className="flex flex-col gap-4 items-center">
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          className="border-1 border-gray-700 rounded-md p-1 focus:outline-none focus:border-gray-500"
          onChange={handleOnChange}
          value={username}
        />  
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          className="border-1 border-gray-700 rounded-md p-1 focus:outline-none focus:border-gray-500"
          onChange={handleOnChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder=""
          className="border-1 border-gray-700 rounded-md p-1 focus:outline-none focus:border-gray-500"
          onChange={handleOnChange}
          value={password}
        />
        <button
          className="bg-red-800 text-white px-4 py-2 rounded-md cursor-pointer w-full"
          onClick={handleOnReset}
        >
          Reset
        </button>
      </form>
    </div>
  )
}