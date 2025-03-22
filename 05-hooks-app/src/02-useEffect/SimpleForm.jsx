import { useState } from "react"
import Message from "./Message"

export default function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "Histrix.dev",
    email: "histrix.dev@gmail.com",
  })

  const {username, email} = formState

  const hanldeOnChange = ({target}) => {
    const {name, value} = target
    setFormState({...formState, [name]: value})
  }

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
          onChange={hanldeOnChange}
          value={username}
        />
  
        {(username === "Histrix.dev") && <Message />}
  
        <input
          type="email"
          name="email"
          placeholder="example@example.com"
          className="border-1 border-gray-700 rounded-md p-1 focus:outline-none focus:border-gray-500"
          onChange={hanldeOnChange}
          value={email}
        />
      </form>
    </div>
  )
}